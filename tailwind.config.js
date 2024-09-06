/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: '#45474B',
        bg2: '#1E1E1E',
        clr3: '#969696',
        clr4: '#FFFFFF',
      },
      boxShadow: {
        'gray': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}