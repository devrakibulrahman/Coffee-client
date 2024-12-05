/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        headerImg: 'url(/15.jpg)',
        footerImg: 'url(/13.jpg)',
        subFooterImg: 'url(/24.jpg)',
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'rancho': ["Rancho", "cursive"],
      },
      fontSize:{
        'heading-xs': ['1.5rem', { lineHeight: '2rem' }], // Small screens
        'heading-sm': ['2rem', { lineHeight: '2.5rem' }], // Medium screens
        'heading-md': ['2.5rem', { lineHeight: '3rem' }], // Large screens
        'heading-lg': ['3rem', { lineHeight: '3.5rem' }], // Extra-large screens
        'subpara-xs': ['1rem', { lineHeight: '1.5rem' }],
        'subpara-sm': ['1.125rem', { lineHeight: '1.75rem' }],
        'subpara-md': ['1.25rem', { lineHeight: '2rem' }],
        'subpara-lg': ['1.5rem', { lineHeight: '2.25rem' }],
      }
    },
  },
  plugins: [],
}