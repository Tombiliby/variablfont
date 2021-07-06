module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        hover: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      outline: {
        blue: ['2px solid #0000ff', '1px'],
      }
    },
  },
  variants: {
    extend: {
      outline: ['hover', 'focus-visible'],
      ringWidth: ['hover'],
      ringColor: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
