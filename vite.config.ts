import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion', 'lucide-react'], // << add any modules that cause issues
    },
  },
});
