/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    fontFamily: {
      karl: ['Karla']
    },
    extend: {
      colors: {
        background: '#F3F4F6',
        muted: '#f8f9fa',
        label: '#012a4a',
        labelmuted: '#B3B3B3',
        labellight: '#9AACBA',
        primary: '#274c77',
        secondary: '#6096ba',
        secondarylight: '#a3cef1'
      }
    },
  },
  plugins: [],
}
