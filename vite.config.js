import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'three', test: /node_modules[\\/]three[\\/]/ },
            {
              name: 'r3f',
              test: /node_modules[\\/](@react-three|postprocessing|its-fine|zustand|suspend-react|maath|stats-gl|three-stdlib|troika|camera-controls)/,
            },
            { name: 'motion', test: /node_modules[\\/](framer-motion|motion|motion-dom|motion-utils)[\\/]/ },
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/ },
          ],
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})
