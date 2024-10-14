/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    css: true,
    setupFiles: ['vitest-browser-vue'],
    browser: {
      provider: 'playwright',
      enabled: true,
      name: 'firefox',
      headless: true,
    },
  },
})
