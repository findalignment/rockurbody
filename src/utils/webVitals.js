/**
 * Web Vitals Monitoring
 * Tracks Core Web Vitals for performance monitoring
 */

// Track Core Web Vitals
export function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not available, silently fail
    });
  }
}

// Simple performance tracking without external dependencies
export function trackPerformance() {
  if (typeof window === 'undefined' || !window.performance) return;

  // Track page load time
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    if (import.meta.env.DEV) {
      console.log('⚡ Performance Metrics:');
      console.log(`  Page Load Time: ${pageLoadTime}ms`);
      console.log(`  Connect Time: ${connectTime}ms`);
      console.log(`  Render Time: ${renderTime}ms`);
    }

    // Send to analytics in production (if configured)
    if (import.meta.env.PROD && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'load',
        value: pageLoadTime,
        event_category: 'Performance'
      });
    }
  });

  // Track Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (import.meta.env.DEV) {
          console.log(`⚡ LCP: ${lastEntry.renderTime || lastEntry.loadTime}ms`);
        }

        // Send to analytics
        if (import.meta.env.PROD && window.gtag) {
          window.gtag('event', 'lcp', {
            value: lastEntry.renderTime || lastEntry.loadTime,
            event_category: 'Performance'
          });
        }
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // PerformanceObserver not supported
    }

    // Track First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          
          if (import.meta.env.DEV) {
            console.log(`⚡ FID: ${fid}ms`);
          }

          // Send to analytics
          if (import.meta.env.PROD && window.gtag) {
            window.gtag('event', 'fid', {
              value: fid,
              event_category: 'Performance'
            });
          }
        });
      });

      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // PerformanceObserver not supported
    }

    // Track Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        if (import.meta.env.DEV) {
          console.log(`⚡ CLS: ${clsValue}`);
        }
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Report final CLS when page is hidden
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          if (import.meta.env.PROD && window.gtag) {
            window.gtag('event', 'cls', {
              value: clsValue,
              event_category: 'Performance'
            });
          }
        }
      });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }
}

// Track long tasks (tasks taking more than 50ms)
export function trackLongTasks() {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (import.meta.env.DEV) {
            console.warn(`⚠️  Long Task detected: ${entry.duration}ms`, entry);
          }
        }
      });

      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    trackPerformance();
    
    if (import.meta.env.DEV) {
      trackLongTasks();
    }
  }
}

