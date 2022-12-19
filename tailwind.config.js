/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /col-span-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /col-start-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /justify-self-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /self-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /max-w-/,
    },
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#36454f',
        light: '#5f707b',
        dark: '#0e1e27',
      },
      secondary: {
        DEFAULT: '#536878',
        light: '#8096a7',
        dark: '#293e4c',
      },
      tertiary: {
        DEFAULT: '#708090',
        light: '#9fafc0',
        dark: '#445463',
      },
      quaternary: {
        DEFAULT: '#536872',
        light: '#8096a0',
        dark: '#293e47',
      },
      success: {
        DEFAULT: '#68AC41',
        light: '#9ade70',
        dark: '#367c0e'
      },
      warning: {
        DEFAULT: '#E7B22B',
        light: '#ffe45f',
        dark: '#b18300'
      },
      danger: {
        DEFAULT: '#E76F51',
        light: '#ffa07e',
        dark: '#b04027'
      },
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      gridTemplateColumns: {
        // Simple 12 column grid
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
