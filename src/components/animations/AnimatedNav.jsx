import { Link } from 'react-router-dom';
import { useState } from 'react';

/**
 * AnimatedNavLink Component
 * Navigation link with sliding underline animation
 */
export function AnimatedNavLink({ to, children, isActive, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative py-2 px-1 font-semibold transition-colors duration-300
        ${isActive ? 'text-accent' : 'text-neutralDark hover:text-accent'}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Animated underline */}
      <span 
        className="absolute bottom-0 left-0 h-0.5 bg-accent"
        style={{
          width: isHovered || isActive ? '100%' : '0%',
          transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          transformOrigin: 'left',
        }}
      />
      
      {/* Highlight background on hover */}
      <span
        className="absolute inset-0 rounded-lg bg-accent/5 -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}
      />
    </Link>
  );
}

/**
 * ScrollNavBar Component
 * Navigation bar that changes appearance on scroll
 */
export function ScrollNavBar({ children, className = '' }) {
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${className}
      `}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </nav>
  );
}

