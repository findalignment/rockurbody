import { useState } from 'react';

/**
 * AnimatedCard Component
 * Card that lifts on hover with smooth transitions
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.clickable - Whether card is clickable
 * @param {function} props.onClick - Click handler
 * @param {boolean} props.glassmorphism - Apply glassmorphism effect
 */
function AnimatedCard({ 
  children, 
  className = '', 
  clickable = false,
  onClick,
  glassmorphism = false 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = glassmorphism
    ? 'bg-white/80 backdrop-blur-lg border border-sand/30'
    : 'bg-white border border-sand/20';

  return (
    <div
      className={`
        ${baseStyles}
        rounded-2xl p-8 
        transition-all duration-400 ease-out
        ${clickable ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(10, 37, 64, 0.12), 0 8px 16px rgba(10, 37, 64, 0.08)' 
          : '0 4px 12px rgba(10, 37, 64, 0.04), 0 2px 6px rgba(10, 37, 64, 0.02)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;
