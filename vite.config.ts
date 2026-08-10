import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/dictionary-api": {
        target: "https://api.dictionaryapi.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dictionary-api/, ""),
      },
    },
  },
  preview: {
    proxy: {
      "/dictionary-api": {
        target: "https://api.dictionaryapi.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dictionary-api/, ""),
      },
    },
  },
})
