import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable tree shaking and minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'openai': ['openai'],
          // Page chunks
          'main-pages': [
            './src/pages/Home',
            './src/pages/About',
            './src/pages/Services',
            './src/pages/Contact'
          ],
          'booking-pages': [
            './src/pages/Book',
            './src/pages/BookConsult',
            './src/pages/BookMove30',
            './src/pages/BookMove60',
            './src/pages/BookMove90',
            './src/pages/BookMove120'
          ],
          'schedule-pages': [
            './src/pages/Schedule12Series',
            './src/pages/ScheduleHipSeries',
            './src/pages/ScheduleMovement60'
          ]
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion'
    ],
  },
  // Enable gzip compression
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})