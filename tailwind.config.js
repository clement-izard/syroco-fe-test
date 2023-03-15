/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headerBg: '#243d3d',
        fontDefault: '#FFFFFF',
        fontHover: '#CCCCCC',
        cardDefault: '#009B86',
        cardSelected: '#025247',
        cardHover: '#34AC9C',
        btnLaunchDefault: '#009B86',
        btnLaunchHover: '#34AC9C',
        btnSelectDefault: '#6154f3',
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        defaultHidden: '3px 3px 18px 0 rgba(0, 0, 0, 0)',
        default: '3px 3px 18px 0 rgba(0, 0, 0, 0.9)',
      },
      padding: {
        initial: 'initial',
      },
    },
  },
  plugins: [],
};
