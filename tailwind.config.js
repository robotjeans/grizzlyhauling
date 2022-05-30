module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'color-red': '#D22D40',
      'color-slate': '#0A2533',
      'color-offwhite': '#F7F5F0',
      'color-black': '#050505',
      'color-white': '#FFFFFF',
      'color-gray': '#666666',
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
