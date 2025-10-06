/**
 * Wave Divider Component
 * Soft SVG curves for section transitions
 */
function WaveDivider({ 
  position = 'bottom', // 'top' or 'bottom'
  color = '#ffffff',
  opacity = 1,
  height = '100px',
  flip = false,
  className = ''
}) {
  const svgTransform = flip ? 'scaleX(-1)' : 'scaleX(1)';
  
  return (
    <div 
      className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 w-full overflow-hidden leading-none ${className}`}
      style={{ 
        height,
        transform: position === 'top' ? 'rotate(180deg)' : 'none'
      }}
    >
      <svg 
        className="relative block w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ transform: svgTransform }}
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}
          opacity={opacity}
        />
      </svg>
    </div>
  );
}

export default WaveDivider;

