module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/img/bg-img.png')",
        'hero-blue-bg': "url('/src/assets/img/blue-bg.svg')",
      },
      colors: {
        primary: '#00DACC',
        dark: '#00090F',
        light: '#EAFFFF',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
