import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RoutePrefetcher = () => {
  const location = useLocation();

  useEffect(() => {
    // Prefetch likely next routes based on current location
    const prefetchRoutes = () => {
      const currentPath = location.pathname;
      
      // Define likely navigation paths for each route
      const prefetchMap = {
        '/': ['/about', '/services', '/contact'],
        '/about': ['/services', '/contact', '/approach'],
        '/services': ['/pricing', '/packages', '/book'],
        '/pricing': ['/packages', '/book'],
        '/packages': ['/book', '/contact'],
        '/contact': ['/book', '/about'],
        '/approach': ['/process', '/services'],
        '/process': ['/approach', '/services'],
        '/smart-starts': ['/book', '/packages'],
        '/12-series': ['/book/structural-integration', '/schedule/12-series'],
        '/hip-series': ['/book/structural-integration', '/schedule/hip-series'],
        '/what-is-structural-integration': ['/book/structural-integration', '/12-series'],
        '/what-is-movement-education': ['/book/movement-education', '/smart-starts'],
        '/book': ['/contact', '/packages'],
        '/book/structural-integration': ['/schedule/12-series', '/12-series'],
        '/book/movement-education': ['/smart-starts', '/what-is-movement-education'],
        '/book/combo-programs': ['/packages', '/contact'],
      };

      const routesToPrefetch = prefetchMap[currentPath] || [];
      
      // Prefetch each route
      routesToPrefetch.forEach(route => {
        // Create a link element to prefetch the route
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        link.as = 'document';
        document.head.appendChild(link);
      });
    };

    // Small delay to avoid blocking current page load
    const timeoutId = setTimeout(prefetchRoutes, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default RoutePrefetcher;
