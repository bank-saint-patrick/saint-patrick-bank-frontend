// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
/*darkMode: 'media', // or 'media' or 'class'
  content: ['./src/**//*.{js,jsx,ts,tsx}', './public/index.html'],
  //theme: {
    /*container: {
      center: true
    },
    */
    /*colors: {
      'darkorange-100': 'rgb(234, 145, 9)',
      'darkorange-200': 'rgb(289, 127, 2)',
      'darkorange-300': 'rgb(269, 110, 4)',
      'darkorange-400': 'rgb(225, 93, 2)',
      'custom-st-patrick-gn': '#2A5C3F',
      'custom-st-patrick-yw': '#F7C548',
      'custom-st-patrick-ltgn': '#6E8750',
      // current: 'currentColor',
    },
    screens: {
      /*'xs': '350px',
      'lgt': '280px',*/
      // ...defaultTheme/*
    //},
    //extend: {
      
    //}
    
  //},
  // variants: {},
  /*plugins: [
    require('@tailwindcss/forms'), // import tailwind forms
  ]*/