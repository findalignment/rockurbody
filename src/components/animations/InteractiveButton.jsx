import { useState } from 'react';

/**
 * InteractiveButton Component
 * Enhanced button with hover scale, ripple effect, and smooth transitions
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant: 'primary', 'secondary', 'outline'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.href - Link URL (renders as anchor if provided)
 * @param {boolean} props.external - Opens in new tab if true
 */
function InteractiveButton({ 
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  href,
  external = false,
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled) return;
    
    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples([...ripples, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 600);
    
    if (onClick) onClick(e);
  };

  // Base styles
  const baseStyles = 'relative overflow-hidden font-semibold rounded-lg transition-all duration-300 ease-in-out transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90 hover:scale-105 hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 hover:scale-105 hover:shadow-lg',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white hover:scale-105',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const ButtonContent = () => (
    <>
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      ))}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      <ButtonContent />
    </button>
  );
}

export default InteractiveButton;

