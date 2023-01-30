import { defineTheme, palette } from 'pinceau'
import colors from 'tailwindcss/colors'
import { tailwindToRgb } from './utils/node/colors'

export default defineTheme({
  folio: {
    color: {
      primary: tailwindToRgb(colors.orange),
      muted: tailwindToRgb(colors.stone),
    },
  },
})
