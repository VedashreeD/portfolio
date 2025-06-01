import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', 
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
