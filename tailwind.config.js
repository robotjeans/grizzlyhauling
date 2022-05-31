module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      red: '#D22D40',
      slate: '#0A2533',
      offwhite: '#F7F5F0',
      black: '#050505',
      white: '#FFFFFF',
      gray: '#666666',
      transparent: 'transparent',
    },
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
      fontFamily: {
        bangers: ['Bangers-Regular'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
