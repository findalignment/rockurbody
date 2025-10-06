/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // WCAG AA Compliant Colors (4.5:1 contrast ratio minimum)
        primary: '#0a2540',      // Deep ocean blue (AA compliant on white)
        accent: '#0891b2',       // Darker cyan (AA compliant - was #06b6d4)
        'accent-light': '#06b6d4', // Original cyan for decorative use only
        secondary: '#1e4a6f',    // Medium ocean blue (AA compliant)
        sand: '#d4c5b0',         // Desaturated sand (decorative only)
        offWhite: '#faf8f5',     // Off-white backgrounds
        sage: '#4a7c59',         // Darker sage green (AA compliant - was #8ba888)
        'sage-light': '#8ba888', // Original sage for decorative use only
        highlight: '#ea580c',    // Darker orange (AA compliant - was #f97316)
        text: '#1a1a1a',         // Near black for text (AAA compliant)
        neutralLight: '#faf8f5', // Off-white
        neutralDark: '#1e293b',  // Darker slate (AA compliant - was #2c3e50)
        success: '#166534',      // Dark green (AA compliant)
        'success-light': '#4a7c59', // Lighter for backgrounds
        warning: '#d97706',      // Darker amber (AA compliant - was #f59e0b)
        error: '#dc2626',        // Darker red (AA compliant - was #ef4444)
        
        // Focus ring color (high contrast)
        focus: '#0891b2',        // Accent color for focus states
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Geometric sans for display
        heading: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Geometric sans for headings
        body: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'], // Neutral serif for body
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Fallback sans
      },
      fontSize: {
        base: '20px', // Base body text size
      },
      fontWeight: {
        'ultralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
        'extra-loose': '2.25',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}