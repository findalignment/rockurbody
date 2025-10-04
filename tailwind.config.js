/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',      // Dark slate
        accent: '#06b6d4',       // Cyan
        secondary: '#3b82f6',    // Blue
        highlight: '#f97316',    // Orange
        text: '#e2e8f0',         // Light slate
        neutralLight: '#f8fafc', // Cool white
        neutralDark: '#1e293b',  // Dark slate for body text
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'], // Bold display font for heroes
        heading: ['Inter', 'system-ui', 'sans-serif'], // Display font for headings
        body: ['Inter', 'system-ui', 'sans-serif'], // Clean sans serif for body
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
    },
  },
  plugins: [],
}