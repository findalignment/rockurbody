import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Animation Toggle Component
 * Allows users to disable animations site-wide
 * Respects prefers-reduced-motion OS setting
 */
function AnimationToggle({ className = '' }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [osPreference, setOsPreference] = useState(false);

  useEffect(() => {
    // Check OS preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setOsPreference(prefersReduced);

    // Check user's saved preference
    const savedPreference = localStorage.getItem('reduceAnimations');
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === 'false');
    } else if (prefersReduced) {
      setAnimationsEnabled(false);
    }
  }, []);

  const handleToggle = () => {
    const newValue = !animationsEnabled;
    setAnimationsEnabled(newValue);
    localStorage.setItem('reduceAnimations', (!newValue).toString());
    
    // Reload page to apply changes
    window.location.reload();
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-neutralDark/70">
        {osPreference && '(OS preference detected) '}
        Animations
      </span>
      
      <button
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full 
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
          ${animationsEnabled ? 'bg-accent' : 'bg-gray-300'}
        `}
        role="switch"
        aria-checked={animationsEnabled}
        aria-label="Toggle animations"
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
            ${animationsEnabled ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
      
      <span className="text-sm font-medium text-neutralDark">
        {animationsEnabled ? 'On' : 'Off'}
      </span>
    </div>
  );
}

export default AnimationToggle;

