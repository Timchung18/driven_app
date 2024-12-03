/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'header-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px
        'header-2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],    // 32px
      },
      fontWeight: {
        '800': '800',
        '900': '900',
      },
    },
  },
  plugins: [],
}

