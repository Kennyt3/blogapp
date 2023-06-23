/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgHF: '#2C3E50',
        bgmain: '#F8F8F8',
        textmain: '#333333 ',
        accent: '#E74C3C',
        subaccent: '#3498DB',
      },
    },
  },
  plugins: [],
}
