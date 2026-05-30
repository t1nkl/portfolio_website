<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, useTemplateRef } from 'vue'

// Zero-dependency replacement for the abandoned `v-lazy-image` package.
// Reproduces its exact blur-up behaviour: show a tiny placeholder, defer the
// real fetch until the element scrolls into view, then swap to the real image
// and add the `v-lazy-image-loaded` class once it has decoded. The two CSS
// hooks (`.v-lazy-image` / `.v-lazy-image-loaded`) are unchanged in the
// consumer's styles, so the visual is identical.
const props = defineProps<{
  src: string
  srcPlaceholder: string
  alt?: string
}>()

const img = useTemplateRef<HTMLImageElement>('img')
const intersected = ref(false)
const loaded = ref(false)

const currentSrc = computed(() => (intersected.value ? props.src : props.srcPlaceholder))

let observer: IntersectionObserver | null = null

function onLoad() {
  // Ignore the placeholder's load event; only the real image flips `loaded`.
  if (intersected.value) loaded.value = true
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    intersected.value = true
    return
  }
  observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      intersected.value = true
      observer?.disconnect()
    }
  })
  if (img.value) observer.observe(img.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <img
    ref="img"
    class="v-lazy-image"
    :class="{ 'v-lazy-image-loaded': loaded }"
    :src="currentSrc"
    :alt="alt"
    loading="lazy"
    decoding="async"
    @load="onLoad"
  />
</template>
