import { useState } from 'react';

/**
 * HoverCard Component
 * Card with zoom, elevation, and content reveal on hover
 */
function HoverCard({ 
  title,
  subtitle,
  description,
  icon,
  children,
  onClick,
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        relative bg-white rounded-2xl p-8 cursor-pointer
        transition-all duration-500 ease-out
        ${className}
      `}
      style={{
        transform: isHovered ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Icon */}
      {icon && (
        <div 
          className="mb-6 transition-transform duration-500"
          style={{
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold text-primary mb-3 transition-colors duration-300">
        {title}
      </h3>

      {/* Subtitle - appears on hover */}
      {subtitle && (
        <div
          style={{
            maxHeight: isHovered ? '100px' : '0',
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out',
          }}
        >
          <p className="text-accent font-semibold mb-3">{subtitle}</p>
        </div>
      )}

      {/* Description */}
      <p className="text-neutralDark/80 leading-relaxed mb-4">
        {description}
      </p>

      {/* Additional content */}
      {children && (
        <div
          style={{
            maxHeight: isHovered ? '500px' : '0',
            opacity: isHovered ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 0.4s ease-out 0.1s',
          }}
        >
          {children}
        </div>
      )}

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: '2px solid transparent',
          background: isHovered 
            ? 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.5)) border-box'
            : 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
        }}
      />
    </div>
  );
}

export default HoverCard;

