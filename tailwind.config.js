/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rae-orange': '#D2622A',
        'rae-orange-light': '#E67A47',
        'rae-orange-dark': '#B8541F',
        'rae-gray': '#6B7280',
        'rae-gray-light': '#F3F4F6',
        'rae-gray-dark': '#374151'
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}