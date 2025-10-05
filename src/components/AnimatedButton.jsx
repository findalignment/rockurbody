import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * AnimatedButton Component
 * Button with magnetic pull effect and gradient hover
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Button text/content
 * @param {string} props.variant - 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {string} props.to - Link destination (if using as Link)
 * @param {string} props.href - External link (if using as anchor)
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.magnetic - Enable magnetic effect
 * @param {boolean} props.gradient - Enable gradient hover effect
 * @param {boolean} props.disabled - Disabled state
 */
function AnimatedButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  magnetic = true,
  gradient = true,
  disabled = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef();

  // Magnetic effect on mouse move
  const handleMouseMove = (e) => {
    if (!magnetic || disabled) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.2; // Magnetic strength
    const deltaY = (e.clientY - centerY) * 0.2;
    
    setMagneticOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMagneticOffset({ x: 0, y: 0 });
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary to-secondary
      text-offWhite font-semibold
      hover:shadow-lg
      ${gradient ? 'hover:from-secondary hover:to-primary' : ''}
    `,
    secondary: `
      bg-sage text-white font-semibold
      hover:bg-sage/90 hover:shadow-lg
    `,
    outline: `
      bg-transparent border-2 border-accent text-primary font-semibold
      hover:bg-accent/5 hover:border-accent/80
    `,
    ghost: `
      bg-transparent text-primary font-semibold
      hover:bg-primary/5
    `,
    cta: `
      bg-gradient-to-r from-highlight to-orange-600
      text-white font-bold
      hover:shadow-xl
      ${gradient ? 'hover:from-orange-600 hover:to-highlight' : ''}
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseStyles = `
    relative inline-flex items-center justify-center
    rounded-lg
    transition-all duration-300 ease-out
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  const buttonStyle = {
    transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
  };

  const commonProps = {
    ref: buttonRef,
    className: baseStyles,
    style: buttonStyle,
    onMouseEnter: () => setIsHovered(true),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    disabled,
    ...props,
  };

  // Render as Link if 'to' prop is provided
  if (to && !disabled) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href && !disabled) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  );
}

export default AnimatedButton;
