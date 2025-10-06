/**
 * Sidebar Component
 * Floating content boxes with supplementary information
 */
function Sidebar({ 
  children, 
  title,
  position = 'right', // left, right
  variant = 'default', // default, accent, highlight
  sticky = false,
  className = '' 
}) {
  const variants = {
    default: 'bg-white border-2 border-neutralDark/10',
    accent: 'bg-accent/5 border-2 border-accent/20',
    highlight: 'bg-sage/5 border-2 border-sage/20'
  };

  return (
    <aside 
      className={`
        ${variants[variant]}
        rounded-xl p-6 shadow-sm
        ${sticky ? 'sticky top-24' : ''}
        ${position === 'left' ? 'float-left mr-6 mb-4' : 'float-right ml-6 mb-4'}
        w-full md:w-80
        ${className}
      `}
    >
      {title && (
        <h4 className="font-heading font-semibold text-lg text-primary mb-4 pb-3 border-b border-neutralDark/10">
          {title}
        </h4>
      )}
      <div className="text-sm text-neutralDark/80 space-y-3">
        {children}
      </div>
    </aside>
  );
}

export default Sidebar;

