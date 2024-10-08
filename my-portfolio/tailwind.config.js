/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',  
        '160': '40rem',  
        '192': '48rem',  
      },
      width: {
        '128': '32rem', 
        '160': '40rem',  
        '192': '48rem',  
        '256': '64rem',  
      },
    },
  },
  plugins: [require('daisyui')],
}

