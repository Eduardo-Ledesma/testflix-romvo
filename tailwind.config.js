/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Big Shoulders Text"', 'sans-serif'],
      },
      colors: {
        'base-light':'#D1A2FF',
        'base-dark': '#372846',
        dark: '#242424',
        error: '#FF0000'
      },
      letterSpacing: {
        'big': '4px',
      },
    },
  },
  plugins: [],
}

