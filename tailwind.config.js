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
    extend: {
      fontFamily: {
        inherit: 'inherit',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
