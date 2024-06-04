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
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(0.75)' },
          '50%': { transform: 'scale(0.85)' },
        },
        expand: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        pulse: 'pulse 1.5s infinite',
        expand: 'expand 0.5s',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transformOrigin: {
        'center': 'center',
      },
    },
      
  
  },
  plugins: [],
};
