import { forwardRef } from 'react';

/**
 * Accessible Button Component
 * 
 * Features:
 * - Multiple variants (primary, secondary, accent, outline, ghost, danger)
 * - Size options (sm, md, lg, xl)
 * - Full keyboard navigation support
 * - WCAG 2.1 AA compliant color contrast
 * - Loading and disabled states
 * - Icon support
 * - Focus visible indicators
 */

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props
}, ref) => {
  
  // Base styles - always applied
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold font-body
    rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  // Variant styles with WCAG AA compliant contrast ratios
  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent/90 active:bg-accent/80
      focus:ring-accent/50
      disabled:bg-neutralDark/20 disabled:text-neutralDark/40
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary/90 active:bg-secondary/80
      focus:ring-secondary/50
      disabled:bg-neutralDark/20 disabled:text-neutralDark/40
      shadow-sm hover:shadow-md
    `,
    accent: `
      bg-highlight text-white
      hover:bg-highlight/90 active:bg-highlight/80
      focus:ring-highlight/50
      disabled:bg-neutralDark/20 disabled:text-neutralDark/40
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent border-2 border-accent text-accent
      hover:bg-accent hover:text-white
      active:bg-accent/90
      focus:ring-accent/50
      disabled:border-neutralDark/20 disabled:text-neutralDark/40
    `,
    ghost: `
      bg-transparent text-accent
      hover:bg-accent/10 active:bg-accent/20
      focus:ring-accent/50
      disabled:text-neutralDark/40
    `,
    danger: `
      bg-error text-white
      hover:bg-error/90 active:bg-error/80
      focus:ring-error/50
      disabled:bg-neutralDark/20 disabled:text-neutralDark/40
      shadow-sm hover:shadow-md
    `,
    success: `
      bg-success text-white
      hover:bg-success/90 active:bg-success/80
      focus:ring-success/50
      disabled:bg-neutralDark/20 disabled:text-neutralDark/40
      shadow-sm hover:shadow-md
    `,
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm min-h-[32px]',
    md: 'px-4 py-2.5 text-base min-h-[40px]',
    lg: 'px-6 py-3 text-lg min-h-[48px]',
    xl: 'px-8 py-4 text-xl min-h-[56px]',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
