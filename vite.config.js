import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 'https://trefle.io'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Réglage du proxy pour passer le problème des cors origines : https://vitejs.dev/config/server-options.html
 server:{
  proxy:{
    '/api':{
      target: 'https://trefle.io',
      changeOrigin: true
    }
  }
 }
})

