/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1a1a1a', // Dark Gray
          800: '#2d2d2d', // Surface
          700: '#3d3d3d',
        },
        slate: {
          300: '#8f969c',
          400: '#71797E', // Steel
          500: '#5d656b',
        }
      }
    },
  },
  plugins: [],
}
