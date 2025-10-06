import { Link } from 'react-router-dom';

/**
 * AnimatedLink Component
 * Link with underline slide animation and smooth transitions
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.to - Link destination
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.underline - Show underline animation
 * @param {string} props.icon - Optional icon component
 */
function AnimatedLink({ 
  children,
  to,
  className = '',
  underline = true,
  icon,
  ...props
}) {
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 transition-colors duration-300 ease-out ${className}`}
      {...props}
    >
      <span className="relative">
        {children}
        {underline && (
          <span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500 ease-out group-hover:w-full"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        )}
      </span>
      {icon && (
        <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </Link>
  );
}

export default AnimatedLink;

