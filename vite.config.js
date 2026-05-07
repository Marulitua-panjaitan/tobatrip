import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Jika sedang build untuk GitHub Pages (npm run deploy), pakai base /tobatrip/
    // Jika tidak (untuk Vercel atau lokal), pakai base /
    base: process.env.NODE_ENV === 'production' && command === 'build' ? '/tobatrip/' : '/',
  }
})