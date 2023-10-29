/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        green: {
          g1: '#46d993',
        },
        blue: {
          b1: '#00A9FF',
          b2: '#89CFF3',
          b3: '#A0E9FF',
          b4: '#CDF5FD',
        },
        grey: {
          0: '#808080',
          100: '#EFEFEF',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#D2D2D2',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#D9D9D9',
          g1: '#F8F8F8',
          g2: '#5E6366',
          g3: '#D6D6D6',
          g4: '#999999',
          g5: '#9E9E9E',
          1000: '#666666',
          100000: '#F9F9F9',
          g6: '#E9ECF4',
          g7: '#F4F4F4',
          g8: '#E0E0E0',
          g9: '#9E9E9E',
        },
        white: {
          0: '#FFFFFF',
          100: '#F8F8F8',
          200: '#EEEEEE',
          300: '#F9FCFF',
          400: '#F5F5F5',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
