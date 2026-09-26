/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#0a0b0d',
          900: '#111215',
          850: '#17191e',
          800: '#1e2127',
          700: '#2b2f38',
          600: '#434955',
          500: '#646b79',
          400: '#8c93a0',
          300: '#b8bdc7',
          200: '#dcdfe5',
          100: '#f0ede6',
          50: '#faf8f5',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fbe9e3',
          200: '#f7d6cb',
          300: '#eebaa8',
          400: '#e1947b',
          500: '#d36c4b',
          600: '#c25332',
          700: '#a34026',
          800: '#853623',
          900: '#6f2f21',
        },
        ochre: {
          DEFAULT: '#c89658',
          light: '#dfa86a',
          dark: '#a8753a',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'architectural': '0.18em',
      }
    },
  },
  plugins: [],
}
