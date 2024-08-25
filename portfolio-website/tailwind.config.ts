import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          ...fontFamily.sans,
        ],
      },
      colors: {
        customGray: '#19181b',
        customGreen: '#2BB4BF',
      },
    },
  },
  plugins: [],
} satisfies Config
