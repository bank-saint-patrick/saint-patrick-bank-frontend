module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '350px',
      },
      colors: {
        desert: '#a76e24',
        'cream-can': '#F4C74B',
        plantation: '#295C3F',
        dingley: '#6E8751',
        'blue-stone': '#01575A',
      },
    },
  },
  plugins: ['tailwindcss'],
};
