/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'custom-color': 'rgb(13, 17, 23)',
        'pro-w-black': 'rgb(255,255,255,1)',
        'pro-black-2':'rgb(22,27,34,1)',
      },
      writingMode: {
        'vertical': 'vertical-rl',
      },
      textOrientation: {
        'vertical': 'upright',
      },
      typography: {
        DEFAULT: {
          css: {
            fontWeight: '900',
          },
        },
      },
    },
      

  },
  plugins: [],
}
