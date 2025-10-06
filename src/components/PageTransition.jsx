import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 20,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;

