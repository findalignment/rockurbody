/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',      // Deep blue
        secondary: '#fb923c',     // Coral orange
        accent: '#06b6d4',        // Bright cyan
        neutralLight: '#f8fafc',  // Cool white
        neutralDark: '#1e293b',   // Dark slate
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}