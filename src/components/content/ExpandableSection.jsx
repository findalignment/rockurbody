import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Expandable Section Component
 * "Read More" functionality for long content
 */
function ExpandableSection({ 
  children,
  preview,
  buttonText = 'Read More',
  collapseText = 'Show Less',
  defaultExpanded = false,
  className = '' 
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  return (
    <div className={className}>
      {/* Always visible preview content */}
      {preview && !isExpanded && (
        <div className="mb-4">
          {preview}
        </div>
      )}

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? {} : { height: 'auto', opacity: 1 }}
            exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="
          inline-flex items-center gap-2 
          text-accent hover:text-accent/80 
          font-semibold text-sm
          transition-colors duration-200
          group
        "
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? collapseText : buttonText}</span>
        <svg 
          className={`
            w-4 h-4 transition-transform duration-300
            ${isExpanded ? 'rotate-180' : 'rotate-0'}
            group-hover:translate-y-0.5
          `}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default ExpandableSection;

