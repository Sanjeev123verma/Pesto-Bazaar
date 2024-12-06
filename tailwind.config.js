/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      abc: ["Oswald", "sans-serif"],
      bbb: ["Playwrite DE Grund", "cursive"],
      ccc: ["Playwrite DE Grund", "cursive"],
    },
  
    // colors: {
    //  'bg-blue':["#1c085d"],
    // },
  },
  plugins: [],
}

