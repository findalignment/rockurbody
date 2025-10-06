import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Animated Input with focus glow, floating label, and error shake
 */
function AnimatedInput({ 
  label, 
  error, 
  type = 'text',
  className = '',
  ...props 
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
    if (props.onBlur) props.onBlur(e);
  };

  const labelVariants = shouldReduceMotion ? {} : {
    floating: {
      y: -24,
      scale: 0.85,
      color: error ? '#dc2626' : '#06b6d4'
    },
    default: {
      y: 0,
      scale: 1,
      color: '#94a3b8'
    }
  };

  const shakeVariants = shouldReduceMotion ? {} : {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      variants={shakeVariants}
      animate={error && !shouldReduceMotion ? 'shake' : ''}
    >
      {/* Floating Label */}
      {label && (
        <motion.label
          className="absolute left-4 pointer-events-none origin-left transition-colors duration-200"
          variants={labelVariants}
          animate={isFocused || hasValue ? 'floating' : 'default'}
          transition={{ duration: 0.2 }}
          style={{ top: '1rem' }}
        >
          {label}
        </motion.label>
      )}

      {/* Input Field */}
      <input
        type={type}
        className={`
          w-full px-4 py-3 rounded-xl border-2 
          transition-all duration-200
          focus:outline-none
          ${error 
            ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' 
            : 'border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20'
          }
          ${label ? 'pt-6 pb-2' : ''}
        `}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          willChange: shouldReduceMotion ? 'auto' : 'border-color, box-shadow'
        }}
        {...props}
      />

      {/* Error Message */}
      {error && (
        <motion.p
          className="mt-1 text-sm text-red-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}

      {/* Focus Glow Effect */}
      {!shouldReduceMotion && isFocused && !error && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-accent/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

export default AnimatedInput;

