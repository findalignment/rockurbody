import { useState, useEffect } from 'react';

/**
 * Typing Text Animation
 * Displays text character by character or word by word
 */
function TypingText({ 
  text, 
  speed = 30, 
  mode = 'char', // 'char' or 'word'
  onComplete,
  className = '' 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  useEffect(() => {
    // If reduced motion, show all text immediately
    if (shouldReduceMotion) {
      setDisplayedText(text);
      if (onComplete) onComplete();
      return;
    }

    const elements = mode === 'word' ? text.split(' ') : text.split('');
    
    if (currentIndex < elements.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => {
          if (mode === 'word') {
            return prev + (prev ? ' ' : '') + elements[currentIndex];
          }
          return prev + elements[currentIndex];
        });
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === elements.length) {
      onComplete();
    }
  }, [currentIndex, text, speed, mode, shouldReduceMotion, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < (mode === 'word' ? text.split(' ').length : text.length) && !shouldReduceMotion && (
        <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse" aria-hidden="true">|</span>
      )}
    </span>
  );
}

export default TypingText;

