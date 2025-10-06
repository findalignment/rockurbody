/**
 * Curve Divider Component
 * Smooth curved transitions between sections
 */
function CurveDivider({ 
  position = 'bottom',
  color = '#ffffff',
  opacity = 1,
  height = '80px',
  variant = 'curve1', // curve1, curve2, curve3, tilt
  className = ''
}) {
  const paths = {
    curve1: "M0,0 C300,80 600,80 900,0 L1200,0 L1200,120 L0,120 Z",
    curve2: "M0,60 C300,100 600,20 900,60 L1200,60 L1200,120 L0,120 Z",
    curve3: "M0,0 Q600,120 1200,0 L1200,120 L0,120 Z",
    tilt: "M0,40 L1200,0 L1200,120 L0,120 Z",
    waves: "M0,0 Q150,50 300,0 T600,0 T900,0 T1200,0 L1200,120 L0,120 Z"
  };
  
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
      >
        <path 
          d={paths[variant] || paths.curve1}
          fill={color}
          opacity={opacity}
        />
      </svg>
    </div>
  );
}

export default CurveDivider;

