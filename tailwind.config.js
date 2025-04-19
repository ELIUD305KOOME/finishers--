/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      animation: {
        bubble: 'bubble 3s ease-in-out infinite',
        svg: 'svgAnimation 2.5s linear infinite', // 👈 Add this line
      },
      keyframes: {
        bubble: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.8',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.8',
          },
        },
        svgAnimation: { // 👈 Add this block
          from: { strokeDashoffset: '0' },
          to: { strokeDashoffset: '1000' },
        },
      },
      strokeWidth: {
        '1': '3px', // Optional: helps with stroke-1 utility
      },
    },
  },
  plugins: [],
};
