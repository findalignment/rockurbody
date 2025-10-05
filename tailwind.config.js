/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a2540',      // Deep ocean blue
        accent: '#06b6d4',       // Cyan (fine accent only)
        secondary: '#1e4a6f',    // Medium ocean blue
        sand: '#d4c5b0',         // Desaturated sand
        offWhite: '#faf8f5',     // Off-white
        sage: '#8ba888',         // Sage green
        highlight: '#f97316',    // Orange (kept for CTAs)
        text: '#1a1a1a',         // Near black for text
        neutralLight: '#faf8f5', // Off-white
        neutralDark: '#2c3e50',  // Dark blue-gray for body text
        success: '#8ba888',      // Sage green
        warning: '#f59e0b',
        error: '#ef4444',
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