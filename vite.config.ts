import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    sourcemap: true,
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
})
