import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/visionvest/',
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