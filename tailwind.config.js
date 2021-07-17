const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spinner: (theme) => ({
        default: {
            color: '#99d5c9',
            size: '2em',
            border: '5px',
            speed: '800ms'
        }
    }),
      colors: {
        'middle-blue-green': '#99d5c9',
        'steel-teal': '#6c969d',
        'dark-blue-gray': '#645e9d',
        'russian-violet': '#392b58',
        'dark-purple': '#2d0320'
      },
    },
  },
  variants: {
    extend: {},
    spinner: ['responsive']
  },
  plugins: [
    require('tailwindcss-spinner')({
        className: 'spinner',
        themeKey: 'spinner'
    })
]
}
