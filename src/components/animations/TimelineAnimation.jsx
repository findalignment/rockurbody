import { useEffect, useRef, useState } from 'react';

/**
 * TimelineAnimation Component
 * Animated timeline with expanding dots and drawing lines
 */
function TimelineAnimation({ items = [] }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative py-12">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutralLight overflow-hidden">
        <div 
          className="w-full bg-accent origin-top transition-all duration-1000 ease-out"
          style={{
            height: visibleItems.length > 0 ? `${(visibleItems.length / items.length) * 100}%` : '0%',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => {
          const isVisible = visibleItems.includes(index);
          const delay = visibleItems.indexOf(index) * 150;

          return (
            <div
              key={index}
              data-index={index}
              className="timeline-item relative pl-20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
              }}
            >
              {/* Dot */}
              <div 
                className="absolute left-6 top-2 w-4 h-4 rounded-full bg-white border-2 border-accent transition-all duration-500"
                style={{
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  boxShadow: isVisible ? '0 0 0 4px rgba(6, 182, 212, 0.2)' : 'none',
                  transitionDelay: `${delay}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              />

              {/* Content */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                {item.year && (
                  <div className="text-sm font-bold text-accent mb-2">{item.year}</div>
                )}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimelineAnimation;

