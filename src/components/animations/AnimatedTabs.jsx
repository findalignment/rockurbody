import { useState } from 'react';

/**
 * AnimatedTabs Component
 * Tabs with animated underline and smooth content transitions
 */
function AnimatedTabs({ 
  tabs = [],
  defaultTab = 0,
  onChange,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [direction, setDirection] = useState('right');

  const handleTabChange = (index) => {
    setDirection(index > activeTab ? 'right' : 'left');
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="relative flex border-b-2 border-neutralLight">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`
              relative px-6 py-4 font-semibold transition-colors duration-300
              ${activeTab === index ? 'text-accent' : 'text-neutralDark/60 hover:text-neutralDark'}
            `}
          >
            {tab.label}
          </button>
        ))}
        
        {/* Animated underline */}
        <div
          className="absolute bottom-0 h-0.5 bg-accent transition-all duration-500"
          style={{
            left: `${(activeTab / tabs.length) * 100}%`,
            width: `${100 / tabs.length}%`,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Tab content */}
      <div className="relative overflow-hidden">
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              display: activeTab === index ? 'block' : 'none',
              opacity: activeTab === index ? 1 : 0,
              transform: activeTab === index 
                ? 'translateX(0)' 
                : direction === 'right' 
                  ? 'translateX(-20px)' 
                  : 'translateX(20px)',
              transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs;

