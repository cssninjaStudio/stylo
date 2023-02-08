import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'
import { tailwindToRgb } from './utils/node/colors'

export default defineTheme({
  color: {
    primary: tailwindToRgb(colors.teal),
    muted: tailwindToRgb({
      ...colors.stone,
      1000: '#0f0d0c',
    }),
  },
})
