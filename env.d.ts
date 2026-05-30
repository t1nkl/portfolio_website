/// <reference types="vite/client" />

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // Name of the <transition> applied by ElementorLayout for this route.
    transition?: string
    // Per-route document title prefix (set by router.afterEach).
    title?: string
  }
}
