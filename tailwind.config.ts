import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
              // maxWidth: '100%', // disables 65ch limit
        fontSize: '1.125rem', // text-lg
        lineHeight: '1.75',
            'del': {
              textDecoration: 'line-through',
              color: '#6b7280', // optional: gray-500
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config