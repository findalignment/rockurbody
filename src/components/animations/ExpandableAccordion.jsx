import { useState, useRef, useEffect } from 'react';

/**
 * ExpandableAccordion Component
 * Smooth expanding accordion with height animation and content shift
 */
function ExpandableAccordion({ 
  title,
  children,
  defaultOpen = false,
  icon,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultOpen ? 'auto' : 0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight);
      
      // Set to auto after animation completes for responsive behavior
      setTimeout(() => {
        if (isOpen) setHeight('auto');
      }, 500);
    } else {
      // Set explicit height before transitioning to 0
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight);
      setTimeout(() => setHeight(0), 10);
    }
  }, [isOpen]);

  return (
    <div 
      className="bg-white rounded-2xl shadow-md transition-all duration-500 ease-out overflow-hidden"
      style={{
        transform: isOpen ? 'scale(1)' : 'scale(0.98)',
        boxShadow: isOpen 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <div className="flex items-center gap-4 flex-1">
          {icon && (
            <div 
              className="transition-transform duration-500 ease-out"
              style={{
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              }}
            >
              {icon}
            </div>
          )}
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Chevron */}
        <svg 
          className="w-6 h-6 text-accent transition-transform duration-500"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          height: height,
          opacity: isOpen ? 1 : 0,
          transition: 'height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out',
        }}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ExpandableAccordion;

