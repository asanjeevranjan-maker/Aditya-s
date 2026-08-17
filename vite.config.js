import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Aditya-s/',

  server: {
    port: 3000,
    open: true,
  },

  build: {
    target: 'esnext',
  },
});