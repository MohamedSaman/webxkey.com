module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
      animation: {
        'color-pulse': 'color-pulse 2s ease infinite',
      },
      keyframes: {
        'color-pulse': {
          '0%, 100%': { 
            'background': '#a2f5bf', // Solid green
          },
          '50%': {
            'background': 'linear-gradient(90deg, #fef08a, #a2f5bf)', // Gradient
          },
        }
      }
    }
  },
  plugins: [],

  variants: {
    extend: {},
  },
}
