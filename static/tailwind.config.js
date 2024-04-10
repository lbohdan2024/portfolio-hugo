/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "../layouts/**/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        'sm': '1rem',
        'md': '16px',
        'lg': '32px',
        'xl': '32px',
        '2xl': '32px',
      },
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {},
  },
  plugins: [],
};