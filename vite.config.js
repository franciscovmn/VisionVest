import { defineConfig } from 'vite';

export default defineConfig({
  base: 'visionvest',
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
});