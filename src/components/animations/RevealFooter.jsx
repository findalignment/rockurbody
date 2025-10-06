import { useEffect, useState, useRef } from 'react';

/**
 * RevealFooter Component
 * Footer that slides up and fades in as user scrolls near bottom
 * with overlapping decorative shapes
 */
function RevealFooter({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Start revealing when footer is 300px from viewport
      setIsVisible(footerTop < windowHeight + 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={footerRef} className="relative">
      {/* Overlapping decorative shapes */}
      <div className="absolute -top-32 left-0 right-0 pointer-events-none overflow-hidden">
        <svg 
          className="w-full h-32"
          viewBox="0 0 1440 120" 
          fill="none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <path 
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" 
            fill="#0f172a"
            opacity="0.05"
          />
          <path 
            d="M0,80 C240,48 480,48 720,80 C960,112 1200,112 1440,80 L1440,120 L0,120 Z" 
            fill="#0f172a"
            opacity="0.03"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RevealFooter;

