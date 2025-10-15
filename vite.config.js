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
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('openai')) {
              return 'openai';
            }
            // Group other large vendor libraries
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
          
          // Page chunks - split by feature
          if (id.includes('/src/pages/')) {
            if (id.includes('Book') || id.includes('Schedule')) {
              return 'booking-pages';
            }
            if (id.includes('Home') || id.includes('About') || id.includes('Services') || id.includes('Contact')) {
              return 'main-pages';
            }
            if (id.includes('12-Series') || id.includes('Hip-Series') || id.includes('Structural') || id.includes('Movement')) {
              return 'service-pages';
            }
            return 'other-pages';
          }
          
          // Component chunks
          if (id.includes('/src/components/')) {
            if (id.includes('CrystalClearHomepage') || id.includes('LandingPage') || id.includes('Hero')) {
              return 'homepage-components';
            }
            if (id.includes('Chat') || id.includes('FloatingChat')) {
              return 'chat-components';
            }
            return 'ui-components';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 800,
    // Additional optimizations
    target: 'esnext',
    sourcemap: false,
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