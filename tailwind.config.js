/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
     {
      colors: {
        primary: 'rgb(35, 190, 10)',
        }
    },
   
  },
  plugins: [
    require('daisyui'),
  ],
}

