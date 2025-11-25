import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import { initPerformanceMonitoring } from './utils/webVitals'
import { initGA } from './utils/analytics'

// Initialize performance monitoring
initPerformanceMonitoring()

// Initialize Google Analytics
initGA()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Analytics />
    </HelmetProvider>
  </StrictMode>,
)
