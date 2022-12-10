/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.10rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '80': '21rem',
        '85': '23rem'
      },
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
        darkGrayishBlue: 'hsl(227, 10%, 46%)',
        darkGrayy: 'hsl(0, 0%, 59%)',
      }
    },
  },
  plugins: [],
}
