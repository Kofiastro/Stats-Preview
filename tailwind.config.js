/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Lexend: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        verydarkBlueMain:'hsl(233, 47%, 7%)',
        Darkdesaturatedblue_card:'hsl(244, 38%, 16%)',
        SoftViolet:'hsl(277, 64%, 61%)',
        white:'hsl(0, 0%, 100%)',
        slightlyTranspWhiteStat:'hsla(0, 0%, 100%, 0.75)',
        slightlyTranspWhiteMain:'hsla(0, 0%, 100%, 0.6)',

      }
    },
  },
  plugins: [],
}

