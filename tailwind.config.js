/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0077C8', // Extracted from the logo's central cross and outer ring
        'brand-green': '#5CB85C', // Extracted from the leaves
        'brand-orange': '#F0AD4E', // Extracted from the human figure
        'brand-light-green': '#8BC34A', // Lighter green for accents
        'brand-dark-green': '#2E7D32', // Darker green for contrast
        'brand-light-orange': '#FFB74D', // Lighter orange for accents
        'brand-dark-orange': '#E65100', // Darker orange for contrast
        'brand-light-blue': '#4FC3F7', // Lighter blue for accents
        'brand-dark-blue': '#01579B', // Darker blue for contrast
        blue: { 
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      gradients: {
        'blue-green': 'linear-gradient(135deg, var(--tw-colors-brand-blue) 0%, var(--tw-colors-brand-green) 100%)',
        'green-orange': 'linear-gradient(135deg, var(--tw-colors-brand-green) 0%, var(--tw-colors-brand-orange) 100%)',
        'blue-orange': 'linear-gradient(135deg, var(--tw-colors-brand-blue) 0%, var(--tw-colors-brand-orange) 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
