/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'gilda-display': ['Gilda Display', 'serif'],
       
      },
      backgroundImage: {
        'texture': "url('/images/test1.png')",
      },
      colors: {
        primary: {
          light: "#fff",
          dark: "#fff"
        }
      }
    },
  },
  plugins: [],
};
