/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            margin: '0px',
          },
        },
      }),

      colors: {
        // primary: '#0C2D57',
        // primary: '#007FAE',
        primary: '#058BB8',
        // secondary: '#FC6736',
        secondary: '#024454',
        // secondary: '#D63484',
        'primary-light': '#1998C7',
        tertiary: '#595b66',
        crystal: '#F8F4EC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
