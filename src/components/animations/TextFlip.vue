<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  staticWords: {
    type: String as PropType<string>,
    default: () => ''
  },
  dynamicWords: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  forEachWordAnimation: {
    type: Boolean as PropType<boolean>,
    default: () => false
  },
  textAlign: {
    type: String as PropType<string>,
    default: 'center'
  }
})
</script>

<template>
  <div class="text-flip">
    <h1 v-if="props.staticWords">{{ props.staticWords }}</h1>
    &nbsp;
    <div v-if="props.forEachWordAnimation">
      <span v-for="(word, index) in props.dynamicWords" :key="index">
        <h1
          v-for="(letter, letterIndex) in word"
          :key="letterIndex"
          :style="'--i:' + letterIndex + '; --delay:' + letterIndex * 100 + 'ms'"
          class="letter"
        >
          {{ letter }}
        </h1>
        &nbsp;
      </span>
    </div>
    <div v-else>
      <span>
        <h1
          v-for="(letter, letterIndex) in props.dynamicWords?.join('&nbsp;')"
          :key="letterIndex"
          :style="'--i:' + letterIndex + '; --delay:' + letterIndex * 100 + 'ms'"
          class="letter"
        >
          {{ letter }}
        </h1>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-flip {
  display: inline-flex;
  align-items: center;

  h1 {
    position: relative;
    display: inline-block;
  }

  .letter {
    animation: flip 3s infinite;
    animation-delay: var(--delay);
  }

  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }

  @media only screen and (max-width: 460px) {
    h1 {
      font-size: 1.7rem !important;
    }
  }
}
</style>
