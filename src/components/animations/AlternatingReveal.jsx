import { useEffect, useRef, useState } from 'react';

/**
 * AlternatingReveal Component
 * Content sections that fade/slide in alternating from left and right
 */
function AlternatingReveal({ 
  children,
  index = 0,
  hasImage = false,
  imagePosition = 'left', // 'left' or 'right'
  imageSrc,
  imageAlt = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const isEven = index % 2 === 0;
  const slideDirection = isEven ? 'left' : 'right';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className="relative py-16 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(0)' 
          : slideDirection === 'left' 
            ? 'translateX(-60px)' 
            : 'translateX(60px)',
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms`,
      }}
    >
      {hasImage ? (
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
          {/* Image with decorative shape */}
          <div className="md:w-1/2 relative">
            <div 
              className="absolute -z-10 w-full h-full rounded-3xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
                transform: isVisible ? 'rotate(3deg) scale(1.05)' : 'rotate(0deg) scale(0.95)',
                transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
              }}
            />
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full rounded-2xl shadow-xl"
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
              }}
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default AlternatingReveal;

