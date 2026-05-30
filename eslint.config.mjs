import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

// Flat config (ESLint 9). Mirrors the previous .eslintrc.cjs ruleset:
// vue3-essential + typescript recommended, with Prettier owning formatting.
export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,cts,tsx,vue,js,jsx,cjs,mjs}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '.firebase/**', 'public/**']
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    }
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting
)
