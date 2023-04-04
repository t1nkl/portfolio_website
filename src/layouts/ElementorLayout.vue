<script setup lang="ts">
// @ts-nocheck
import { RouterView } from 'vue-router'
import HeaderNavigation from '@/components/HeaderComponent.vue'
import FooterNavigation from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderNavigation />

  <RouterView v-slot="{ Component, route }">
    <transition mode="out-in" :name="route.meta.transition || 'fade'" appear>
      <component :is="Component" />
    </transition>
  </RouterView>

  <FooterNavigation />
</template>

<style lang="scss" scoped>
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
