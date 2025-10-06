import { useEffect, useRef, useState } from 'react';

/**
 * SectionTransition Component
 * Animated wipe transition between sections
 */
function SectionTransition({ 
  children,
  wipeColor = 'bg-accent',
  wipeDirection = 'left', // 'left', 'right', 'up', 'down'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isWiping, setIsWiping] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsWiping(true);
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setIsWiping(false), 800);
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const getWipeStyle = () => {
    const base = 'absolute inset-0 z-20';
    const transformOrigin = {
      left: 'origin-left',
      right: 'origin-right',
      up: 'origin-top',
      down: 'origin-bottom',
    };

    const scaleDirection = {
      left: 'scaleX',
      right: 'scaleX',
      up: 'scaleY',
      down: 'scaleY',
    };

    return {
      className: `${base} ${wipeColor} ${transformOrigin[wipeDirection]}`,
      style: {
        transform: isWiping ? `${scaleDirection[wipeDirection]}(0)` : `${scaleDirection[wipeDirection]}(1)`,
        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    };
  };

  const wipeStyle = getWipeStyle();

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Wipe overlay */}
      <div {...wipeStyle} />
      
      {/* Content */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out 0.4s',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default SectionTransition;

