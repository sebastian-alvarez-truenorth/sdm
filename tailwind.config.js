module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fcfd',
          100: '#e9f9fb',
          200: '#c7f0f6',
          300: '#a5e7f1',
          400: '#62d6e6',
          500: '#1fc4db',
          600: '#1cb0c5',
          700: '#019fb5',
          800: '#137683',
          900: '#126a86',
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  }
}
