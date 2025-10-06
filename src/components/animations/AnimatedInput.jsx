import { useState } from 'react';

/**
 * AnimatedInput Component
 * Input field with focus transitions, label animations, and smooth interactions
 * 
 * @param {object} props
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler
 * @param {string} props.className - Additional CSS classes
 */
function AnimatedInput({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label 
          className={`absolute left-4 transition-all duration-300 ease-out pointer-events-none ${
            isFocused || value 
              ? '-top-2 text-xs bg-white px-2 text-accent font-semibold' 
              : 'top-3 text-base text-neutralDark/60'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 ease-out focus:outline-none ${
          isFocused 
            ? 'border-accent shadow-md scale-[1.01]' 
            : 'border-neutralLight hover:border-neutralDark/30'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'border-color, box-shadow, transform',
        }}
        {...props}
      />
    </div>
  );
}

export default AnimatedInput;

