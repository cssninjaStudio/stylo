import { defineTheme, palette } from 'pinceau'
import colors from 'tailwindcss/colors'
import { tailwindToRgb } from './utils/node/colors'

export default defineTheme({
  folio: {
    color: {
      primary: tailwindToRgb(colors.indigo, colors.orange),
      muted: tailwindToRgb(
        {
          ...colors.slate,
          1000: '#0a101f',
        },
        {
          ...colors.stone,
          1000: '#0f0d0c',
        }
      ),
    },
  },
})
