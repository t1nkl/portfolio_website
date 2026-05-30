<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useSkillsStore } from '@/stores/skills'
import { useRoute } from 'vue-router'
import { vueWordCloudRotationItems } from '@/utils/vueWordCloudRotationItems'
import TextFlip from '@/components/animations/TextFlip.vue'
import SkillsWordCloud from '@/components/SkillsWordCloud.vue'

const skillsStore = useSkillsStore()

/**
 * Font Family
 */
const fontFamilyValues = [
  // 'Arial',
  // 'Helvetica',
  // 'Courier New',
  // 'Verdana',
  'Open Sans',
  'Londrina Sketch',
  'Finger Paint',
  'Fredericka the Great'
]
const fontFamily = ref<string | undefined>(undefined)

/**
 * Rotation
 */
const rotationItemsValues = vueWordCloudRotationItems()
const rotationItem = ref(0)
const rotation = computed(() => {
  const item = rotationItemsValues[rotationItem.value]
  return item.value
})

/**
 * Re-roll the font + rotation whenever the Skills route is (re)entered.
 * Watching `route.path` (a primitive) makes the callback actually fire on
 * navigation — the previous `watch(() => route, ...)` watched the route object
 * by identity, which never changes, so it never ran.
 */
const route = useRoute()
watch(
  () => route.path,
  () => {
    fontFamily.value = fontFamilyValues[Math.floor(Math.random() * fontFamilyValues.length)]
    rotationItem.value = Math.floor(Math.random() * rotationItemsValues.length)
  }
)

/**
 * On Before Mount
 */
onBeforeMount(() => {
  fontFamily.value = fontFamilyValues[Math.floor(Math.random() * fontFamilyValues.length)]
  rotationItem.value = Math.floor(Math.random() * rotationItemsValues.length)
})
</script>

<template>
  <div class="skills author-holder fade-component">
    <TextFlip
      :static-words="''"
      :dynamic-words="['Every.', 'Word.', 'Sense.']"
      :text-align="'left'"
    />

    <h2 class="divider-line fade-component"><span>skills</span></h2>

    <div
      class="vue-word-cloud"
      style="margin-top: -3vh; height: 110vh; position: relative; width: 100%"
    >
      <SkillsWordCloud
        :words="skillsStore.getSkillsListArray"
        :font-family="fontFamily || 'Open Sans'"
        :rotation="rotation"
        :color="skillsStore.getRandomColor"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// maxquery mixin is injected globally via vite.config.ts (additionalData)

.author-holder {
  // social
  .social {
    ul {
      position: relative;
      overflow: hidden;
      list-style-type: none;
      text-align: center;
      float: none;
      padding: 0;
      width: calc(100% + 1.5rem);
      @include maxquery(640px) {
        width: 100%;
      }

      li {
        position: relative;
        display: inline-block;
        float: none;
        width: 114px;
        height: 114px;
        text-align: center;
        margin: 16px 1.5rem;
        @include maxquery(640px) {
          width: 100%;
          margin: 16px 0;
        }

        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 1;
          transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);

          img {
            position: absolute;
            display: block;
            top: 50%;
            transform: translateY(-50%);
          }

          &:hover {
            opacity: 1;
          }

          span {
            position: absolute;
            display: block;
            width: auto;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            line-height: 114px;
            text-align: center;
            font-family: 'Open Sans', serif;
          }

          .logo-bg-holder {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;

            .logo-bg {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              -moz-border-radius: 50%;
              -webkit-border-radius: 50%;
              border-radius: 50%;
              top: 50%;
              left: 50%;
              box-shadow: 0 0 36px rgba(0, 0, 0, 0.15), 0 0 36px rgba(0, 0, 0, 0.005);
              transition: all 0.45s cubic-bezier(1, 0.5, 0.8, 1);

              &.social-oval-big {
                width: 72px;
                height: 64px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -3;
                opacity: 0.25;
              }

              &.social-oval-small {
                width: 54px;
                height: 62px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -2;
                opacity: 0.45;
              }

              &.social-circle {
                width: 94px;
                height: 94px;
                background: #a5d6a7;
                transform: translate(-50%, -50%);
                z-index: -1;
              }
            }
          }
        }

        &:nth-child(1) {
          width: 72px;
        }

        &:nth-child(3) {
          width: 92px;
        }
      }
    }
  }

  .content {
    position: relative;
    display: block;
    overflow: hidden;
    width: calc(100vw - 120px);
    max-width: 760px;
    padding-bottom: 20px;
    padding-left: 60px;
    @include maxquery(640px) {
      width: calc(100% - 32px);
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
</style>
