/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "../layouts/**/*.html"],
  theme: {
    center: true,
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1240px',
    },
    extend: {},
  },
  plugins: [],
};