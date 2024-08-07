/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  colors: {
    background: '#060608',
    color: '#FAFAFA',
  },
  fontSize: {
    '1.5rem': '1.5rem',
  },
  gridTemplateColumns: {
    '1fr': '1fr',
  },
}

