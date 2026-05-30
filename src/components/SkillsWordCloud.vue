<script setup lang="ts">
import { ref, computed, shallowRef, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import cloud from 'd3-cloud'

// Maintained replacement for the abandoned `vuewordcloud` package. d3-cloud
// (actively maintained) does the layout; we render the placed words ourselves as
// absolutely-positioned spans so the look + animations are fully owned in CSS:
// per-word colour, one decorative font per render, weight-driven sizing, a
// staggered scale+fade pop-in, and a blur-while-laying-out reveal.

interface Props {
  // [text, weight] tuples (matches the store's getSkillsListArray, which is
  // typed loosely as (string | number)[][]); weight drives font size.
  words: (string | number)[][]
  fontFamily: string
  // Returns a rotation in TURNS (vuewordcloud convention; 1 = 360deg).
  rotation: (word: string) => number
  // Per-word colour picker (matches the store's getRandomColor()).
  color: () => string | undefined
}
const props = defineProps<Props>()

// Normalise the loosely-typed tuples once.
const items = computed(() =>
  props.words.map((w) => ({ text: String(w[0]), weight: Number(w[1]) }))
)

interface Placed {
  text: string
  x: number
  y: number
  rotate: number
  size: number
  color: string
}

const container = ref<HTMLElement | null>(null)
const placed = shallowRef<Placed[]>([])
const ready = ref(false) // false while laying out -> drives blur + pop-in

let resizeObserver: ResizeObserver | null = null
let lastWidth = 0
let lastHeight = 0
let layoutToken = 0 // invalidates in-flight async layouts when a newer one starts

// Map a skill weight (1..10) onto a font size scaled to the container so the
// cloud fills the region the way vuewordcloud auto-fit did. The factor shrinks
// until every word fits (d3-cloud silently drops overflow, which would lose
// skills), so no content is dropped.
function layout(animate = true) {
  const el = container.value
  if (!el) return
  const width = el.clientWidth
  const height = el.clientHeight
  if (!width || !height) return

  lastWidth = width
  lastHeight = height

  const list = items.value
  if (!list.length) return

  const token = ++layoutToken
  const maxWeight = Math.max(1, ...list.map((w) => w.weight))
  const area = width * height
  const factor = Math.sqrt(area / list.length) / maxWeight

  // Only replay the blur + staggered pop-in on the initial render. On a resize
  // re-layout we keep `ready` true and just reposition, so the user never sees
  // the cloud blank out / re-animate when the window changes size.
  if (animate) ready.value = false

  const attempt = (f: number, triesLeft: number) => {
    const sized = list.map((w) => ({
      text: w.text,
      weight: w.weight,
      size: Math.max(10, Math.round(8 + w.weight * f))
    }))

    cloud<{ text: string; weight: number; size: number }>()
      .size([width, height])
      .words(sized)
      .padding(1)
      .rotate((d) => props.rotation(d.text) * 360) // turns -> degrees
      .font(props.fontFamily)
      .fontSize((d) => d.size)
      .random(Math.random)
      // d3-cloud mutates each word with x/y/rotate/size at layout time; type the
      // callback param to reflect that (the generic word type only has the inputs).
      .on(
        'end',
        (
          out: Array<{
            text?: string
            x?: number
            y?: number
            rotate?: number
            size?: number
          }>
        ) => {
          // A newer layout() superseded this run — discard stale results.
          if (token !== layoutToken) return

          // d3-cloud may drop unplaced words (sparse array); keep only real ones.
          const valid = (out || []).filter((d) => d && typeof d.text === 'string')

          // If words were dropped, shrink and retry so the full skill set shows.
          if (valid.length < list.length && triesLeft > 0) {
            attempt(f * 0.85, triesLeft - 1)
            return
          }

          placed.value = valid.map((d) => ({
            text: d.text as string,
            x: d.x ?? 0,
            y: d.y ?? 0,
            rotate: d.rotate ?? 0,
            size: d.size ?? 16,
            color: props.color() ?? '#363636'
          }))

        // Paint at the start state, then flip `ready` so the CSS transition runs
        // (blur clears + words pop in, staggered by per-word transition-delay).
        nextTick(() => {
          requestAnimationFrame(() => {
            if (token === layoutToken) ready.value = true
          })
        })
      })
      .start()
  }

  attempt(factor, 6)
}

onMounted(async () => {
  // Lay out only after the (decorative) fonts have loaded, otherwise d3-cloud
  // measures fallback-font metrics and the placement is wrong / can come up empty.
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {
      /* ignore — fall through and lay out anyway */
    }
  }
  layout()

  // Re-layout on real size changes only (ResizeObserver also fires on observe()
  // and on font-reflow; ignoring no-op ticks avoids re-entrant churn).
  resizeObserver = new ResizeObserver(() => {
    const el = container.value
    if (!el) return
    if (el.clientWidth === lastWidth && el.clientHeight === lastHeight) return
    layout(false) // reposition only — don't replay the intro animation on resize
  })
  if (container.value) resizeObserver.observe(container.value)
})

onBeforeUnmount(() => resizeObserver?.disconnect())

// Re-layout when the font / rotation strategy is re-rolled.
watch(
  () => [props.fontFamily, props.rotation],
  () => layout()
)

// Total enter cascade budget (ms), matching the previous animation-duration.
const ENTER_MS = 5000
function wordStyle(w: Placed, i: number) {
  const n = Math.max(1, placed.value.length)
  const scale = ready.value ? 1 : 0.3
  return {
    color: w.color,
    fontSize: w.size + 'px',
    opacity: ready.value ? 1 : 0,
    transform: `translate(-50%, -50%) translate(${w.x}px, ${w.y}px) rotate(${w.rotate}deg) scale(${scale})`,
    transitionDelay: `${Math.round((i / n) * (ENTER_MS - 500))}ms`
  }
}
</script>

<template>
  <div
    ref="container"
    class="skills-word-cloud"
    :class="{ 'is-ready': ready }"
    :style="{ fontFamily: props.fontFamily }"
    role="img"
    :aria-label="`Word cloud of technical skills: ${items.map((w) => w.text).join(', ')}`"
  >
    <span
      v-for="(w, i) in placed"
      :key="w.text"
      class="word"
      :style="wordStyle(w, i)"
      aria-hidden="true"
      >{{ w.text }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.skills-word-cloud {
  position: absolute;
  inset: 0;
  // Blurred while laying out, sharpens once ready — matches the previous
  // update:progress blur(8px) reveal.
  filter: blur(8px);
  transition: filter 0.8s cubic-bezier(1, 0.5, 0.8, 1);

  &.is-ready {
    filter: blur(0);
  }

  // Words placed from the centre of the region (d3-cloud origin), each popping
  // in from 30% scale + transparent over 0.5s ease-out.
  .word {
    position: absolute;
    left: 50%;
    top: 50%;
    white-space: nowrap;
    line-height: 1;
    user-select: none;
    transition:
      opacity 0.5s ease-out,
      transform 0.5s ease-out;
  }
}
</style>
