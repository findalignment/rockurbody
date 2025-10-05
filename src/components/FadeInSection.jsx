import { useEffect, useRef, useState } from 'react';

/**
 * FadeInSection Component
 * Fades in content when it enters the viewport
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to fade in
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.delay - Delay before animation starts (in ms)
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right', 'none'
 */
function FadeInSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add delay before showing
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  // Direction-based transform
  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate(0, 30px)';
      case 'down':
        return 'translate(0, -30px)';
      case 'left':
        return 'translate(30px, 0)';
      case 'right':
        return 'translate(-30px, 0)';
      case 'none':
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[400ms] ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
