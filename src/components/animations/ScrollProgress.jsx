import { useEffect, useState } from 'react';

/**
 * ScrollProgress Component
 * Shows scroll progress with smooth scroll-to-top functionality
 */
function ScrollProgress({ position = 'right' }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const positionStyles = {
    right: 'right-6 top-1/2 -translate-y-1/2 flex-col h-64',
    left: 'left-6 top-1/2 -translate-y-1/2 flex-col h-64',
    bottom: 'bottom-6 left-1/2 -translate-x-1/2 flex-row w-64',
  };

  return (
    <>
      {/* Progress indicator */}
      <div
        className={`fixed z-40 ${positionStyles[position]} transition-all duration-500`}
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Progress line/bar */}
        <div className={`
          ${position === 'bottom' ? 'h-1 w-full' : 'w-1 h-full'}
          bg-neutralLight/30 rounded-full overflow-hidden backdrop-blur-sm
        `}>
          <div
            className="bg-accent transition-all duration-300 ease-out"
            style={{
              [position === 'bottom' ? 'width' : 'height']: `${scrollProgress}%`,
              [position === 'bottom' ? 'height' : 'width']: '100%',
            }}
          />
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`
            mt-4 w-12 h-12 rounded-full bg-accent text-white
            flex items-center justify-center
            transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-lg active:scale-95
            ${position === 'bottom' ? 'ml-4' : ''}
          `}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ScrollProgress;

