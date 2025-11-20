import { Link } from 'react-router-dom';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  type = 'button',
  className = '',
  fullWidth = false,
  disabled = false,
  ...props 
}) {
  // Base styles - matching Packages page buttons
  const baseStyles = 'font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 border border-black';
  
  // Size variants - ensuring minimum 44px touch target for mobile
  const sizeStyles = {
    sm: 'px-4 py-2.5 text-base md:text-sm rounded-lg min-h-[44px]',
    md: 'px-6 py-3.5 text-base md:text-base rounded-xl min-h-[48px]',
    lg: 'px-8 py-4 text-lg md:text-lg rounded-xl min-h-[52px]'
  };
  
  // Color variants
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    accent: 'bg-accent text-white hover:bg-accent/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    sage: 'bg-sage text-white hover:bg-sage/90',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:scale-[1.02]';
  
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // External link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
