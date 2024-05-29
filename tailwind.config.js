module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0090F5',
        brandDark: '#003691',
        brandDarker: '#001E47',
        brandDarkest: '#0A1C4D',
        brandLight: '#008CE9',
        brandLightest: '#BBF1FF',
        lightGrey: '#E9EBEE',
        darkGrey: '#667A8B',
        darkerGrey: '#5E6D7A',
      },
      spacing: {
        '0.75': '0.1875rem'
      }
    },
  },
  plugins: [],
}
