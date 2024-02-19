/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        mainborder: '#9BAABD',
        background: {
          100: '#E2E8F0',
        },
        text: {
          100: '#334154',
          200: '#64748B',
        },
      },
    },
  },
  plugins: [],
};
