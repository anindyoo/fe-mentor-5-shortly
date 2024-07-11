/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primaryCyan: 'hsla(180, 66%, 49%, 1)',
        primaryDarkViolet: 'hsla(257, 27%, 26%, 1)',
        secondaryRed: 'hsla(0, 87%, 67%, 1)',
        neutralGray: 'hsla(0, 0%, 75%, 1)',
        neutralGrayishViolet: 'hsla(257, 7%, 63%, 1)',
        neutralVeryDarkBlue: 'hsla(255, 11%, 22%, 1)',
        neutralVeryDarkViolet: 'hsla(260, 8%, 14%, 1)',
      },
    },
  },
  plugins: [],
};
