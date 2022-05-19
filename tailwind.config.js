module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        'welcome-landing': 'url(/img/welcome_house.jpg)',
      },
    },
  },
  plugins: [],
};
