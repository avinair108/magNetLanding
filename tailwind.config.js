/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New color scheme
        'ink-black': '#1C1C1E', // Primary Text
        'midnight-navy': '#1A2E40', // Primary BG
        'steel-gray': '#6B7280', // Secondary Text
        'ivory-white': '#FDFDFD', // Background
        'cool-taupe': '#E6E6E6', // Card BG
        'cobalt-blue': '#3A6EA5', // Accent
        'brass-gold': '#C9A34D', // Highlight
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};