import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
    scale: 0.99,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -8,
    scale: 0.99,
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.32, 0.72, 0, 1], // Apple-like cubic-bezier for smooth, elegant motion
  duration: 0.6
};

// Reduced motion variant
const pageVariantsReduced = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransitionReduced = {
  duration: 0.2
};

function PageTransition({ children }) {
  const location = useLocation();
  
  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Check for user setting (to be implemented)
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={shouldReduceMotion ? pageVariantsReduced : pageVariants}
        transition={shouldReduceMotion ? pageTransitionReduced : pageTransition}
        className="page-transition-wrapper"
        style={{
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;

