import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  // Cek apakah build dipicu oleh skrip deploy gh-pages
  // Biasanya ditandai dengan NODE_ENV production dan command build
  const isGhPages = process.env.NODE_ENV === 'production' && command === 'build';
  
  return {
    plugins: [react()],
    /* LOGIC: 
       Vercel secara otomatis memberikan env variable VERCEL=true.
       Jika ada di Vercel, kita wajib pakai base root '/'.
       Jika tidak di Vercel dan sedang build production, pakai '/tobatrip/'.
    */
    base: process.env.VERCEL ? '/' : isGhPages ? '/tobatrip/' : '/',
  }
})