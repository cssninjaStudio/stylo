import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'
import { tailwindToRgb } from '../utils/node/colors'

export default defineTheme({
  color: {
    primary: tailwindToRgb(colors.red),
    muted: tailwindToRgb(
      {
        ...colors.neutral,
        1000: '#080808',
      },
      {
        ...colors.stone,
        1000: '#0f0d0c',
      },
    ),
  },
})
