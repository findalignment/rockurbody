/**
 * Callout Component
 * Highlighted boxes for important information
 */
function Callout({ 
  children, 
  variant = 'info', // info, tip, warning, success, quote
  icon,
  title,
  className = '' 
}) {
  const variants = {
    info: {
      bg: 'bg-accent/10',
      border: 'border-accent/30',
      icon: '💡',
      text: 'text-accent'
    },
    tip: {
      bg: 'bg-sage/10',
      border: 'border-sage/30',
      icon: '✨',
      text: 'text-sage'
    },
    warning: {
      bg: 'bg-highlight/10',
      border: 'border-highlight/30',
      icon: '⚠️',
      text: 'text-highlight'
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: '✓',
      text: 'text-green-700'
    },
    quote: {
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      icon: '💬',
      text: 'text-primary'
    }
  };

  const style = variants[variant] || variants.info;

  return (
    <div 
      className={`
        ${style.bg} ${style.border} border-l-4 rounded-r-lg p-6 my-6
        ${className}
      `}
    >
      <div className="flex gap-4">
        {(icon || style.icon) && (
          <div className="flex-shrink-0 text-2xl" aria-hidden="true">
            {icon || style.icon}
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold ${style.text} mb-2`}>
              {title}
            </h4>
          )}
          <div className="text-neutralDark/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callout;

