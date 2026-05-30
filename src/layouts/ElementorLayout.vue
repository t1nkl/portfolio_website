<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavigation from '@/components/HeaderComponent.vue'
import FooterNavigation from '@/components/FooterComponent.vue'
</script>

<template>
  <a
    href="#main"
    class="absolute top-0 -left-[999px] z-[1000] rounded-br bg-brand-green px-4 py-2 text-ink focus:left-0"
  >
    Skip to content
  </a>

  <HeaderNavigation />

  <main id="main">
    <RouterView v-slot="{ Component, route }">
      <transition mode="out-in" :name="route.meta.transition || 'fade'" appear>
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>

  <FooterNavigation />
</template>

<style lang="scss" scoped>
// Skip-to-content link is styled with Tailwind utilities in the template above
// (off-screen until focused). Everything below stays hand-written SCSS.

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

// Slide transition
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-enter-from,
.slide-fade-leave-to {
  filter: blur(8px);
  transform: translateX(10px);
  opacity: 0;
}
</style>
