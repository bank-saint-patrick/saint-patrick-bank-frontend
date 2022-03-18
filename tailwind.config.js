

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        xsm: '350px'
      },
      colors: {
        'darkorange': '#a76e24',
        'custom-st-patrick-gn': '#295C3F',
        'custom-st-patrick-yw': '#F4C74B',
        'custom-st-patrick-ltgn': '#6E8751',
        'custom-st-patrick-seabl': '#01575A'
      }
    }
  },
  plugins: [require('tailwindcss')],
}
