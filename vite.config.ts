import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'public': fileURLToPath(new URL('./public', import.meta.url)),
    },
  },
})
