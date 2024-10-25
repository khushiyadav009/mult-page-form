/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
      screens:{
        'xss':'300px',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    
    },
  },

  plugins: [],
}

