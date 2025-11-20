import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Remove console.logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    // Security headers for development
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    },
    // CORS configuration
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:5173'],
      credentials: true
    }
  },
  build: {
    // Use default minification (esbuild)
    minify: 'esbuild',
    // Exclude API directory from build (Vercel handles these as serverless functions)
    rollupOptions: {
      external: (id) => {
        // Don't bundle API files - Vercel handles them as serverless functions
        if (id.includes('/api/') || id.startsWith('./api/')) {
          return false; // Actually, we want to include them, just not bundle them
        }
        return false;
      },
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // Firebase
            if (id.includes('firebase') || id.includes('@firebase')) {
              return 'firebase';
            }
            // Animations
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            // Stripe
            if (id.includes('stripe')) {
              return 'stripe';
            }
            // Other large vendors
            return 'vendor';
          }
          
          // SEO pages (separate chunk as they're not often accessed)
          if (id.includes('/src/pages/') && (
            id.includes('SantaCruz') || 
            id.includes('Pain') || 
            id.includes('Relief') ||
            id.includes('Treatment') ||
            id.includes('Surfers') ||
            id.includes('Climbers') ||
            id.includes('Cyclists')
          )) {
            return 'seo-pages';
          }
          
          // Certification pages
          if (id.includes('/src/pages/certifications/')) {
            return 'certification-pages';
          }
          
          // Booking pages
          if (id.includes('/src/pages/') && (id.includes('Book') || id.includes('Schedule'))) {
            return 'booking-pages';
          }
          
          // Main pages (frequently accessed)
          if (id.includes('/src/pages/') && (
            id.includes('Home') || 
            id.includes('About') || 
            id.includes('Services') || 
            id.includes('Contact') ||
            id.includes('Packages')
          )) {
            return 'main-pages';
          }
          
          // Other pages
          if (id.includes('/src/pages/')) {
            return 'other-pages';
          }
          
          // Component chunks
          if (id.includes('/src/components/')) {
            if (id.includes('LandingPage') || id.includes('Hero')) {
              return 'homepage-components';
            }
            if (id.includes('Chat')) {
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
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096, // 4KB - inline small assets
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    exclude: ['firebase', 'framer-motion'] // Let these load on demand
  },
})