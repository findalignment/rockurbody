import { useState, useEffect } from 'react';

/**
 * Simple Markdown Text Parser
 * Converts **bold** text to <strong> tags
 * Maintains line breaks and formatting
 */
function MarkdownText({ text, className = '', typing = false, speed = 20, onComplete }) {
  const [displayedText, setDisplayedText] = useState(typing ? '' : text);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  // Typing effect
  useEffect(() => {
    if (!typing) return;

    if (shouldReduceMotion) {
      setDisplayedText(text);
      if (onComplete) onComplete();
      return;
    }

    const chars = text.split('');
    
    if (currentIndex < chars.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + chars[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === chars.length) {
      onComplete();
    }
  }, [currentIndex, text, speed, typing, shouldReduceMotion, onComplete]);

  // Parse markdown to HTML
  const parseMarkdown = (content) => {
    // Split by ** to find bold sections
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      // Check if this part is wrapped in **
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="font-bold">{boldText}</strong>;
      }
      // Regular text - preserve line breaks
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={className}>
      {parseMarkdown(displayedText)}
      {typing && currentIndex < text.length && !shouldReduceMotion && (
        <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-pulse" aria-hidden="true">|</span>
      )}
    </div>
  );
}

export default MarkdownText;

