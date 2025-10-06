import { useEffect, useRef, useState } from 'react';
import InteractiveButton from './InteractiveButton';

/**
 * PricingCard Component
 * Animated pricing card with scroll reveal, hover effects, and optional highlight
 */
function PricingCard({ 
  title,
  price,
  period,
  features = [],
  buttonText = 'Get Started',
  onButtonClick,
  isHighlighted = false,
  index = 0,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative bg-white rounded-2xl p-8
        transition-all duration-500 ease-out
        ${isHighlighted ? 'ring-2 ring-accent' : ''}
      `}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? isHovered 
            ? 'scale(1.02) translateY(-12px)' 
            : 'scale(1) translateY(0)' 
          : 'translateY(40px)',
        boxShadow: isHovered || isHighlighted
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transitionDelay: `${index * 100}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Best Value Badge */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div 
            className="px-4 py-1 bg-accent text-white text-sm font-bold rounded-full"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          >
            BEST VALUE
          </div>
        </div>
      )}

      {/* Pulsing glow for highlighted card */}
      {isHighlighted && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: '0 0 0 2px rgba(6, 182, 212, 0.3)',
            animation: 'glow 2s ease-in-out infinite',
          }}
        />
      )}

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold text-primary mb-4">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-accent">${price}</span>
          {period && (
            <span className="text-neutralDark/60">/ {period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li 
            key={idx}
            className="flex items-start gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
              transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${(index * 100) + (idx * 50)}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${(index * 100) + (idx * 50)}ms`,
            }}
          >
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-neutralDark/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <InteractiveButton
        variant={isHighlighted ? 'primary' : 'outline'}
        className="w-full"
        onClick={onButtonClick}
      >
        {buttonText}
      </InteractiveButton>
    </div>
  );
}

export default PricingCard;

