/**
 * AnimatedCard Component
 * Card with hover lift, subtle rotation, and smooth transitions
 * Can overlap section boundaries with negative margins
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.lift - Enable hover lift effect
 * @param {boolean} props.overlap - Enable negative margin for overlapping
 * @param {string} props.className - Additional CSS classes
 */
function AnimatedCard({ 
  children,
  lift = true,
  overlap = false,
  className = ''
}) {
  const baseStyles = 'bg-white rounded-2xl p-8 transition-all duration-500 ease-out';
  const liftStyles = lift ? 'hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl' : '';
  const overlapStyles = overlap ? '-mt-16 md:-mt-20 relative z-10' : '';
  
  return (
    <div 
      className={`${baseStyles} ${liftStyles} ${overlapStyles} ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform, box-shadow',
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;

