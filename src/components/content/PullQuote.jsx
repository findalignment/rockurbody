import { motion } from 'framer-motion';

/**
 * Pull Quote Component
 * Large, eye-catching quotes for powerful statements
 */
function PullQuote({ 
  children, 
  author,
  position = 'center', // left, center, right, full
  size = 'large', // small, medium, large
  className = '' 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const positions = {
    left: 'text-left mx-0',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
    full: 'text-center mx-auto max-w-none'
  };

  const sizes = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl lg:text-5xl',
    large: 'text-4xl md:text-5xl lg:text-6xl'
  };

  return (
    <motion.blockquote
      className={`
        ${positions[position]} ${sizes[size]}
        font-heading font-bold text-primary
        max-w-4xl my-12 md:my-16 lg:my-20
        relative
        ${className}
      `}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Opening quote mark */}
      <span 
        className="absolute -top-8 -left-4 md:-left-8 text-6xl md:text-8xl text-accent/20 font-serif leading-none"
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote text */}
      <div className="relative z-10 px-4 md:px-8">
        {children}
      </div>

      {/* Closing quote mark */}
      <span 
        className="absolute -bottom-12 -right-4 md:-right-8 text-6xl md:text-8xl text-accent/20 font-serif leading-none"
        aria-hidden="true"
      >
        "
      </span>

      {/* Author */}
      {author && (
        <footer className="mt-8 text-base md:text-lg font-body font-normal text-neutralDark/60">
          — {author}
        </footer>
      )}

      {/* Decorative underline */}
      <div 
        className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-accent via-primary to-sage rounded-full"
        aria-hidden="true"
      />
    </motion.blockquote>
  );
}

export default PullQuote;

