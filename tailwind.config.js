/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'green1' : '#7DCE13',
      'green2' : '#5BB318',
      'green3' : '#2B7A0B',
      'yellow1' : '#EAE509',
      'white1' : '#FFFFFF',
      'grey1' : '#e5e7eb',
      'black1' : '#000000',
    },
    fontFamily:{
      'poppins':['Poppins']
    }
  },
  plugins: [require("daisyui")],
}