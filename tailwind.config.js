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
          900: '#0f172a', // Darker, bluer gray (Slate 900)
          800: '#1e293b', // Slate 800
          700: '#334155', // Slate 700
        },
        slate: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        }
      }
    },
  },
  plugins: [],
}
