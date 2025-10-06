import { motion } from 'framer-motion';

/**
 * Animated Card that elevates on hover
 * Optional tilt effect
 */
function AnimatedCard({ 
  children, 
  className = '', 
  enableTilt = false,
  onClick,
  ...props 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const baseClasses = 'rounded-2xl transition-shadow duration-300';

  const motionProps = shouldReduceMotion ? {} : {
    whileHover: enableTilt 
      ? { 
          y: -8, 
          rotateX: 2, 
          rotateY: 2,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }
      : { 
          y: -4,
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
        },
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20 
    }
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...motionProps}
      style={{
        willChange: shouldReduceMotion ? 'auto' : 'transform',
        transformStyle: enableTilt ? 'preserve-3d' : 'flat',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;

