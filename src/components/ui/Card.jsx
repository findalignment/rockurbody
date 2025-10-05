import { forwardRef } from 'react';

/**
 * Accessible Card Component
 * 
 * Features:
 * - Multiple variants (default, elevated, bordered, interactive)
 * - Padding options
 * - Hover and focus states
 * - Keyboard navigation for interactive cards
 * - Semantic HTML with proper ARIA attributes
 * - WCAG 2.1 AA compliant
 */

const Card = forwardRef(({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  onClick,
  href,
  as = 'div',
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props
}, ref) => {

  // Base styles
  const baseStyles = `
    bg-white
    rounded-xl
    transition-all duration-200
  `;

  // Variant styles
  const variants = {
    default: `
      shadow-sm
      border border-neutralDark/10
    `,
    elevated: `
      shadow-md
      hover:shadow-lg
    `,
    bordered: `
      border-2 border-neutralDark/20
    `,
    interactive: `
      shadow-sm
      border border-neutralDark/10
      hover:shadow-md hover:border-accent/30
      cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2
      active:scale-[0.99]
    `,
    highlight: `
      shadow-sm
      border-2 border-accent
      bg-accent/5
    `,
  };

  // Padding styles
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // If interactive or has onClick/href, make it focusable
  const isInteractive = interactive || onClick || href;
  const Component = href ? 'a' : as;

  const interactiveProps = isInteractive ? {
    tabIndex: 0,
    role: onClick ? 'button' : href ? 'link' : undefined,
    onKeyDown: (e) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick(e);
      }
    },
  } : {};

  const finalVariant = isInteractive && variant === 'default' ? 'interactive' : variant;

  return (
    <Component
      ref={ref}
      onClick={onClick}
      href={href}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`
        ${baseStyles}
        ${variants[finalVariant]}
        ${paddings[padding]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...interactiveProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

// Card sub-components for better composition
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, as: Component = 'h3', className = '' }) => (
  <Component className={`text-xl font-heading font-bold text-neutralDark ${className}`}>
    {children}
  </Component>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-neutralDark/70 ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-neutralDark/10 ${className}`}>
    {children}
  </div>
);

export default Card;
