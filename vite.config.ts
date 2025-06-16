import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ProjectV1/',
  plugins: [react()],
  server: {
    port: 8080,
    host: true,
    open: true
  }
})
