import { defineTheme, palette } from 'pinceau'
import colors from 'tailwindcss/colors'
import { tailwindToRgb } from './utils/node/colors'

export default defineTheme({
  folio: {
    color: {
      primary: tailwindToRgb(colors.indigo, colors.orange),
      muted: tailwindToRgb(colors.slate, colors.stone),
    },
  },
})
