/**
 * QuoteCallout Component
 * Large, overlapping quote with fade/overlap effect
 */
function QuoteCallout({ quote, position = 'center', overlap = false }) {
  const positionStyles = {
    left: 'left-0 text-left',
    center: 'left-1/2 -translate-x-1/2 text-center',
    right: 'right-0 text-right',
  };

  return (
    <div 
      className={`
        ${overlap ? 'absolute -z-10' : 'relative z-0'}
        ${positionStyles[position]}
        pointer-events-none select-none
        transition-opacity duration-1000 ease-out
      `}
      style={{
        top: overlap ? '50%' : 'auto',
        transform: overlap ? 'translateY(-50%)' : undefined,
      }}
    >
      <div 
        className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold opacity-[0.08] leading-tight"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {quote}
      </div>
    </div>
  );
}

export default QuoteCallout;

