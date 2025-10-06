import { motion } from 'framer-motion';

/**
 * Animated Button with hover effects
 * - Scale on hover (1.03)
 * - Shadow change
 * - Color glow
 * - Ripple effect on click
 */
function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false,
  ...props 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const baseClasses = 'relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-secondary text-white hover:shadow-lg hover:shadow-secondary/30',
    accent: 'bg-accent text-white hover:shadow-lg hover:shadow-accent/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const motionProps = shouldReduceMotion ? {} : {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
      style={{
        willChange: shouldReduceMotion ? 'auto' : 'transform',
      }}
    >
      {/* Ripple effect container */}
      <span className="relative z-10">{children}</span>
      
      {/* Glow effect on hover (only if motion enabled) */}
      {!shouldReduceMotion && (
        <span 
          className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
}

export default AnimatedButton;

