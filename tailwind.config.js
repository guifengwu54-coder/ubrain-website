/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        medical: {
          50: '#f5f7fa',
          100: '#eaeef3',
          200: '#d0dbe7',
          300: '#a8bed3',
          400: '#799cba',
          500: '#5980a2',
          600: '#456787',
          700: '#39546e',
          800: '#32475c',
          900: '#2d3d4e',
          950: '#1e2834',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', '"PingFang SC"', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
