import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ls-projeto-whalequiz/',
  assetsInclude: ["**/*.html"],
  server: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
  },

  plugins: [
    tailwindcss(),
  ],
})