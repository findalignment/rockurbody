import { useEffect, useRef, useState } from 'react';

function ParallaxSection({ 
  children, 
  backgroundImage,
  backgroundColor = '#faf8f5',
  speed = 0.3,
  className = '' 
}) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef();

  useEffect(() => {
    // Disable parallax on mobile devices (width < 768px) and tablets (< 1024px)
    const isMobile = window.innerWidth < 1024;
    
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // On mobile, disable parallax effect
      if (isMobile) {
        setOffset(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Simpler, more dramatic calculation
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(parallaxOffset);
      }
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10 w-full h-full"
        style={{
          backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          transform: `translate3d(0, ${offset}px, 0)`,
          willChange: 'transform',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default ParallaxSection;