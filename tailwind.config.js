/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
        'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1583px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'black': '#2D2E2E',
'green':'#3A4F39',
      },
      },
  },
  plugins: [
    require ('flowbite/plugin')
  ],
}

