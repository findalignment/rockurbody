/**
 * Visual Anchors - Movement & Fascia Themed Icons
 * 
 * Minimalist illustrations and icons that reinforce
 * the brand's focus on movement and structural integration
 */

// Fascia Network Pattern (subtle background overlay)
export const FasciaPattern = ({ className = "", opacity = 0.05 }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <defs>
      <pattern id="fascia-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M0,50 Q25,25 50,50 T100,50 M50,0 Q25,25 0,50 M50,0 Q75,25 100,50 M50,100 Q25,75 0,50 M50,100 Q75,75 100,50"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#fascia-grid)" />
  </svg>
);

// Movement Flow Icon
export const MovementIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 24C8 24 14 14 24 14C34 14 40 24 40 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 24C8 24 14 34 24 34C34 34 40 24 40 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

// Body Alignment Icon
export const AlignmentIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M18 20 L24 26 L30 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 28 L24 34 L30 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Structural Integration Icon
export const StructureIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M24 8 L24 40"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M10 16 L38 32"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
    <path
      d="M38 16 L10 32"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
);

// Breath/Flow Icon
export const BreathIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 24 Q16 16 24 24 Q32 32 40 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 24 Q18 20 24 24 Q30 28 36 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M16 24 Q20 22 24 24 Q28 26 32 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.4"
    />
  </svg>
);

// Connection/Network Icon
export const ConnectionIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <circle cx="36" cy="12" r="3" fill="currentColor" />
    <circle cx="12" cy="36" r="3" fill="currentColor" />
    <circle cx="36" cy="36" r="3" fill="currentColor" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <line x1="12" y1="12" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="36" y1="12" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="36" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="36" y1="36" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Posture/Balance Icon
export const PostureIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M24 14 L24 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M14 20 L24 18 L34 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 28 L18 40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 28 L30 40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Anatomical Line Overlay (decorative)
export const AnatomicalLines = ({ className = "", opacity = 0.03 }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    <g stroke="currentColor" strokeWidth="1" fill="none">
      {/* Spiral Line (fascia pattern) */}
      <path
        d="M100,200 Q200,150 300,200 T500,200 T700,200 T900,200"
        opacity="0.5"
      />
      <path
        d="M100,400 Q200,350 300,400 T500,400 T700,400 T900,400"
        opacity="0.5"
      />
      {/* Vertical alignment lines */}
      <line x1="30%" y1="10%" x2="30%" y2="90%" strokeDasharray="5,5" opacity="0.3" />
      <line x1="70%" y1="10%" x2="70%" y2="90%" strokeDasharray="5,5" opacity="0.3" />
      {/* Curved connection lines */}
      <path
        d="M200,100 Q400,300 600,100"
        opacity="0.4"
      />
    </g>
  </svg>
);

export default {
  FasciaPattern,
  MovementIcon,
  AlignmentIcon,
  StructureIcon,
  BreathIcon,
  ConnectionIcon,
  PostureIcon,
  AnatomicalLines,
};
