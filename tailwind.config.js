/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F6F1',
        espresso: '#2C211C',
        'roasted-brown': '#76513B',
        sage: '#89927C',
        taupe: '#DCD3C7',
        'soft-charcoal': '#514A44',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1152px',
        prose: '720px',
      },
    },
  },
  plugins: [],
};
