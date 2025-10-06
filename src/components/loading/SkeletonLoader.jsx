/**
 * Skeleton Loader with shimmer effect
 * Shows structure while content loads
 */
function SkeletonLoader({ 
  variant = 'text', 
  width = '100%', 
  height,
  className = '',
  count = 1,
  ...props 
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const userPrefersReducedMotion = localStorage.getItem('reduceAnimations') === 'true';
  const shouldReduceMotion = prefersReducedMotion || userPrefersReducedMotion;

  const variants = {
    text: 'h-4 rounded',
    title: 'h-8 rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-lg',
    card: 'h-64 rounded-2xl',
    image: 'aspect-video rounded-lg',
  };

  const baseClasses = `bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 ${
    shouldReduceMotion ? '' : 'animate-shimmer'
  } ${variants[variant]} ${className}`;

  const skeletonStyle = {
    width,
    height: height || (variant === 'circle' ? width : undefined),
    backgroundSize: '200% 100%',
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${index > 0 ? 'mt-2' : ''}`}
          style={skeletonStyle}
          role="status"
          aria-label="Loading..."
          {...props}
        />
      ))}
    </>
  );
}

export default SkeletonLoader;

