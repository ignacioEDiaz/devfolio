import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Vacío = raíz (Vercel). GitHub Pages lo pisa con VITE_BASE=/devfolio/
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
