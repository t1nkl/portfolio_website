<script setup lang="ts">
import { ref, onMounted, type PropType } from 'vue'

const props = defineProps({
  staticWords: {
    type: String as PropType<string>,
    default: () => ''
  },
  dynamicWords: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  textAlign: {
    type: String as PropType<string>,
    default: 'center' // 'left' | 'center' | 'right'
  }
})

const TEXTS = props.dynamicWords as string[]

const MORPH_TIME: number = 1
const COOLDOWN_TIME: number = 0.25

let textIndex: number = TEXTS.length - 1
let morph: number = 0
let cooldown: number = COOLDOWN_TIME
let time: Date = new Date()

const text_morph_1_ref = ref<HTMLElement | null>(null)
const text_morph_2_ref = ref<HTMLElement | null>(null)

const doMorph = (): void => {
  morph -= cooldown
  cooldown = 0

  let fraction = morph / MORPH_TIME

  if (fraction > 1) {
    cooldown = COOLDOWN_TIME
    fraction = 1
  }

  setMorph(fraction)
}

const setMorph = (fraction: number): void => {
  const el1 = text_morph_1_ref.value
  const el2 = text_morph_2_ref.value
  if (!el1 || !el2) return

  el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

  fraction = 1 - fraction
  el1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
  el1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

  el1.textContent = TEXTS[textIndex % TEXTS.length]
  el2.textContent = TEXTS[(textIndex + 1) % TEXTS.length]
}

const doCooldown = (): void => {
  morph = 0

  const el1 = text_morph_1_ref.value
  const el2 = text_morph_2_ref.value
  if (!el1 || !el2) return

  el2.style.filter = ''
  el2.style.opacity = '100%'

  el1.style.filter = ''
  el1.style.opacity = '0%'
}

const animate = (): void => {
  requestAnimationFrame(animate)

  const newTime = new Date()
  const shouldIncrementIndex = cooldown > 0
  const dt = (newTime.getTime() - time.getTime()) / 1000
  time = newTime

  cooldown -= dt

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++
    }

    doMorph()
  } else {
    doCooldown()
  }
}

onMounted(() => {
  text_morph_1_ref.value = document.getElementById('text_morph__span_1')
  text_morph_2_ref.value = document.getElementById('text_morph__span_2')

  setTimeout(() => {
    animate()
  }, 500)
})
</script>

<template>
  <div class="text-morph">
    <div class="text-morph__container" :class="props.textAlign">
      <h1 v-text="props.staticWords"></h1>

      <span id="text_morph__span_1" ref="text_morph_1_ref"></span>
      <span id="text_morph__span_2" ref="text_morph_2_ref"></span>
    </div>
    <svg id="text-morph__filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.text-morph {
  width: 100%;

  .text-morph__container {
    filter: url(#threshold) blur(0.6px);
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .center {
    justify-content: center;
    text-align: center;
  }

  .right {
    justify-content: right;
    text-align: right;
  }

  .left {
    justify-content: left;
    text-align: left;
  }
}

#text-morph__filters {
  height: 0;
}

#text_morph__span_1,
#text_morph__span_2 {
  position: absolute;
  width: 100%;
  display: inline-block;
  font-family: 'Finger Paint', sans-serif;
  font-size: 35pt;
  user-select: none;
}
</style>
