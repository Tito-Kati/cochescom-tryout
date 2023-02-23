const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: {
        50: '#edf5f8',
        100: '#c9e2e9',
        200: '#a5cfda',
        300: '#81bbcb',
        400: '#5da8bc',
        500: '#438ea2',
        600: '#346f7e',
        700: '#254f5a',
        800: '#162f36',
        900: '#071012',
      },
      secondary: {
        50: '#fbf2ea',
        100: '#f2d8c0',
        200: '#e9be96',
        300: '#e0a46b',
        400: '#d78a41',
        500: '#be7028',
        600: '#94571f',
        700: '#693e16',
        800: '#3f250d',
        900: '#150c04',
      },
      accent: {
        50: '#ffe5ea',
        100: '#ffb3c1',
        200: '#ff8097',
        300: '#ff4d6e',
        400: '#ff1a44',
        500: '#e6002b',
        600: '#b30021',
        700: '#800018',
        800: '#4d000e',
        900: '#1a0005',
      },
      slate: {
        50: '#f0f3f5',
        100: '#d1dae1',
        200: '#b2c1cc',
        300: '#94a8b8',
        400: '#758fa4',
        500: '#5b768a',
        600: '#475b6b',
        700: '#33414d',
        800: '#1e272e',
        900: '#0a0d0f',
      },
      gray: {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0d0d0d',
      },
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      transitionDuration: {
        DEFAULT: '350ms',
      },
    },
  },
  plugins: [],
}
