import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@a': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@v': fileURLToPath(new URL('./src/views', import.meta.url))
    },
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: true,
    // TODO - rollup/webpack? needs research
  },
  server: {
    proxy: {
        "/api": { target: "http://localhost:5000", secure: false },
    },
    port: 3001,
    strictPort: true,
    host: "0.0.0.0",
  }
})
