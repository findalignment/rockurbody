import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Animated Link with underline slide/fade on hover
 */
function AnimatedLink({ 
  to, 
  children, 
  className = '', 
  external = false,
  ...props 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const linkClasses = `relative inline-block transition-colors duration-200 ${className}`;

  const underlineVariants = shouldReduceMotion ? {} : {
    initial: { scaleX: 0, opacity: 0 },
    hover: { scaleX: 1, opacity: 1 }
  };

  const LinkComponent = external ? 'a' : Link;
  const linkProps = external 
    ? { href: to, target: '_blank', rel: 'noopener noreferrer' }
    : { to };

  return (
    <LinkComponent 
      {...linkProps}
      className={linkClasses}
      {...props}
    >
      <motion.span
        initial="initial"
        whileHover="hover"
        className="relative"
      >
        {children}
        
        {/* Animated underline */}
        {!shouldReduceMotion && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-current origin-left"
            variants={underlineVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />
        )}
      </motion.span>
    </LinkComponent>
  );
}

export default AnimatedLink;

