import { useEffect, useRef, useState } from 'react';

/**
 * ParallaxSection Component
 * Creates a subtle parallax effect on background elements
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to display
 * @param {string} props.backgroundImage - Background image URL
 * @param {string} props.backgroundColor - Background color (fallback)
 * @param {number} props.speed - Parallax speed (0.1 = slow, 0.5 = fast)
 * @param {string} props.className - Additional CSS classes
 */
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
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop + windowHeight) * speed;
        setOffset(parallaxOffset);
      }
    };

    // Throttle scroll event for performance
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

    window.addEventListener('scroll', scrollListener);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', scrollListener);
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
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
