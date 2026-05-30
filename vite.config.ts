import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Share the responsive mixin across every <style lang="scss"> block
        // instead of redefining it per component. Skip the partial itself so it
        // never @use-imports into itself.
        additionalData: (source: string, filename: string) => {
          if (filename.replace(/\\/g, '/').includes('/assets/styles/_mixins.scss')) {
            return source
          }
          return `@use "@/assets/styles/mixins" as *;\n${source}`
        }
      }
    }
  }
})
