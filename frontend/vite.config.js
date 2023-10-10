// frontend/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join, resolve } from 'path'; // Add the resolve import here
import TailwindCSS from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'backend/static',
  },
  css: {
    postcss: {
      plugins: [
        TailwindCSS(join(__dirname, 'tailwind.config.js')),
        Autoprefixer()
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
  
});
