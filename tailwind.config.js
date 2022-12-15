/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'Acme': 'Acme',
      'Bacode': 'Bacode',
      'Broadway-bt': 'Broadway-bt',
      'Greenhouse-gas': 'Greenhouse-gas',
      'DancingScript': 'DancingScript',
      'Impact': 'Impact',
    },
    extend: {},
  },
  plugins: [],
}