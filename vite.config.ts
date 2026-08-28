import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: 'node_modules/.vite',
  plugins: [react()],
  resolve: {
    // Root-relative so this stays free of node typings.
    alias: { '@': '/src' },
  },
});
