/**
 * Organic Section Dividers
 * 
 * Creates smooth, flowing transitions between sections
 * with wave and curve patterns
 */

export const WaveDivider = ({ flip = false, color = "white" }) => {
  const colorMap = {
    white: "#ffffff",
    gray: "#f8fafc",
    beige: "#faf8f5",
    blue: "#f0f9ff",
  };

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill={colorMap[color]}
        />
      </svg>
    </div>
  );
};

export const CurveDivider = ({ flip = false, color = "white" }) => {
  const colorMap = {
    white: "#ffffff",
    gray: "#f8fafc",
    beige: "#faf8f5",
    blue: "#f0f9ff",
  };

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q360,120 720,60 T1440,0 L1440,120 L0,120 Z"
          fill={colorMap[color]}
        />
      </svg>
    </div>
  );
};

export const AngleDivider = ({ flip = false, color = "white", angle = "right" }) => {
  const colorMap = {
    white: "#ffffff",
    gray: "#f8fafc",
    beige: "#faf8f5",
    blue: "#f0f9ff",
  };

  const path = angle === "right"
    ? "M0,0 L1440,0 L1440,120 L0,80 Z"
    : "M0,0 L1440,0 L1440,80 L0,120 Z";

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path d={path} fill={colorMap[color]} />
      </svg>
    </div>
  );
};

export const FlowDivider = ({ flip = false, color = "white" }) => {
  const colorMap = {
    white: "#ffffff",
    gray: "#f8fafc",
    beige: "#faf8f5",
    blue: "#f0f9ff",
  };

  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C160,96 320,96 480,64 C640,32 800,0 960,32 C1120,64 1280,64 1440,32 L1440,120 L0,120 Z"
          fill={colorMap[color]}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
