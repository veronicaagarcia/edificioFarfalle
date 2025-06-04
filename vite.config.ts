import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // Configuración condicional: GitHub Pages vs Netlify
  base:
    process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS
      ? "/edificioFarfalle/" // Para GitHub Pages
      : "./", // Para Netlify y desarrollo local
})
