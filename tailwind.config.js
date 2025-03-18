/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['THSarabun'],
        body: 'THSarabun'
      },
      colors: {
        primary: 'red',
        secondary: 'blue'
      }
    }
  },
  plugins: [],
  prefix: 'tw-'
}