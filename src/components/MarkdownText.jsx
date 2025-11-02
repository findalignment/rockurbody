import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Simple Markdown Text Parser
 * Converts **bold** text to <strong> tags
 * Converts [text](url) to clickable links
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
    const elements = [];
    let lastIndex = 0;
    
    // Combined regex to find both links [text](url) and bold **text**
    const regex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        elements.push(
          <span key={`text-${lastIndex}`}>
            {content.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Check if it's a link [text](url)
      if (match[1]) {
        const linkText = match[2];
        const url = match[3];
        elements.push(
          <Link 
            key={`link-${match.index}`}
            to={url}
            className="text-accent hover:text-accent/80 underline font-medium transition-colors"
          >
            {linkText}
          </Link>
        );
      }
      // Check if it's bold **text**
      else if (match[4]) {
        const boldText = match[5];
        elements.push(
          <strong key={`bold-${match.index}`} className="font-bold">
            {boldText}
          </strong>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text after last match
    if (lastIndex < content.length) {
      elements.push(
        <span key={`text-${lastIndex}`}>
          {content.substring(lastIndex)}
        </span>
      );
    }
    
    // If no matches found, return the whole content
    if (elements.length === 0) {
      elements.push(<span key="text-0">{content}</span>);
    }
    
    return elements;
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

