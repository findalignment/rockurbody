import { motion } from 'framer-motion';

/**
 * Content Loader with fade + slide animation
 * Replaces skeleton when content loads
 */
function ContentLoader({ 
  isLoading, 
  skeleton, 
  children,
  delay = 0 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const variants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  } : {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay,
        ease: 'easeOut'
      }
    }
  };

  if (isLoading) {
    return skeleton;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default ContentLoader;

