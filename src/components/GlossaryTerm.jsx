import { useState, useRef, useEffect } from 'react';

/**
 * GlossaryTerm component - Shows a tooltip with definition and optional video link
 * Usage: <GlossaryTerm term="fascia" definition="..." videoUrl="..." />
 */
function GlossaryTerm({ term, definition, videoUrl, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const termRef = useRef(null);
  const tooltipRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen && termRef.current) {
      const rect = termRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const viewportWidth = window.innerWidth;
      
      // Estimate tooltip width (max-w-xs = 20rem = 320px)
      const tooltipWidth = 320;
      const tooltipHeight = 150; // Estimate
      
      // Calculate position - prefer above, centered
      let left = scrollX + rect.left + rect.width / 2 - tooltipWidth / 2;
      let top = scrollY + rect.top - tooltipHeight - 8;
      
      // Adjust if tooltip would go off screen
      if (left < scrollX + 10) {
        left = scrollX + 10;
      } else if (left + tooltipWidth > scrollX + viewportWidth - 10) {
        left = scrollX + viewportWidth - tooltipWidth - 10;
      }
      
      // If not enough space above, position below
      if (top < scrollY + 10) {
        top = scrollY + rect.bottom + 8;
      }
      
      setPosition({ top, left });
    }
  }, [isOpen]);

  // Handle closing tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target) &&
        termRef.current &&
        !termRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle delayed close with mouse leave
  const handleMouseLeave = (e) => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    
    // Get mouse position from the event
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Set a small delay before closing to allow mouse to move to tooltip
    closeTimeoutRef.current = setTimeout(() => {
      // Check if mouse is actually over tooltip before closing
      if (tooltipRef.current) {
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        
        // Check if mouse is still over tooltip (with small buffer for edge cases)
        if (
          mouseX >= tooltipRect.left - 10 &&
          mouseX <= tooltipRect.right + 10 &&
          mouseY >= tooltipRect.top - 10 &&
          mouseY <= tooltipRect.bottom + 10
        ) {
          return; // Don't close if mouse is over tooltip
        }
      }
      setIsOpen(false);
    }, 150); // 150ms delay to allow mouse movement from term to tooltip
  };

  // Cancel close when mouse enters term or tooltip
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  return (
    <>
      <span
        ref={termRef}
        className="relative inline-flex items-center gap-1 cursor-help border-b border-dotted border-accent/50 hover:border-accent transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`${term} - Click for definition`}
      >
        {children || term}
        <svg
          className="w-3 h-3 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          className="fixed z-50 bg-white rounded-lg shadow-xl border-2 border-accent p-4 max-w-xs"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-primary text-sm">{term}</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutralDark/60 hover:text-neutralDark text-sm"
              aria-label="Close tooltip"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-neutralDark/80 mb-3 leading-relaxed">
            {definition}
          </p>
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent/80 font-semibold"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch 30-second explainer
            </a>
          )}
        </div>
      )}
    </>
  );
}

export default GlossaryTerm;

