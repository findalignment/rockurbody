import { useEffect, useState, useRef } from 'react';

/**
 * Multi-layer parallax background with depth
 * Background layers move slower than foreground for depth effect
 */
function ParallaxBackground({ children, layers = [] }) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  useEffect(() => {
    if (shouldReduceMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const scrollProgress = -rect.top / (rect.height + window.innerHeight);
            setScrollY(scrollProgress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Background Layers */}
      {!shouldReduceMotion && layers.map((layer, index) => {
        const speed = layer.speed || 0.5; // Slower = more background
        const offset = scrollY * speed * 100;
        
        return (
          <div
            key={index}
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate3d(0, ${offset}px, 0)`,
              willChange: 'transform',
              zIndex: layer.zIndex || index,
            }}
          >
            {layer.type === 'shape' && (
              <div
                className={layer.className}
                style={{
                  ...layer.style,
                  opacity: layer.opacity || 0.1,
                }}
              />
            )}
            {layer.type === 'texture' && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: layer.image ? `url(${layer.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: layer.opacity || 0.05,
                  ...layer.style,
                }}
              />
            )}
            {layer.type === 'gradient' && (
              <div
                className="absolute inset-0"
                style={{
                  background: layer.gradient,
                  opacity: layer.opacity || 0.3,
                  ...layer.style,
                }}
              />
            )}
          </div>
        );
      })}

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default ParallaxBackground;

