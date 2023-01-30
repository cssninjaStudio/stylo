import chroma from 'chroma-js'
import type { DesignToken, ResponsiveToken } from 'pinceau'

const EMPTY_COLOR = '0 0 0'

/**
 * Convert color to RGB values, for use in Pinceau & Tailwind.
 */
export const toRgb = (color: string): string => {
  if (!color) {
    return EMPTY_COLOR
  }

  return chroma(color)
    .rgb()
    .map((v) => {
      if (isNaN(v)) {
        return 0
      }

      return Math.round(v)
    })
    .slice(0, 3) // Remove alpha channel if present
    .join(' ')
}

/**
 * Convert palette to RGB values, for use in Pinceau & Tailwind.
 */
export function paletteToRgb<T extends Record<string, DesignToken<string>>>(
  colors: T
): Record<string, DesignToken<string>> {
  const rgb: Record<string, DesignToken<string>> = { ...colors }

  for (const name of Object.keys(colors)) {
    const value = colors[name].value
    if (typeof value === 'string') {
      rgb[name].value = toRgb(value)
    } else {
      rgb[name].value = Object.entries(value).reduce((acc, [key, value]) => {
        acc[key] = value ? toRgb(value) : EMPTY_COLOR

        return acc
      }, {} as ResponsiveToken<string>)
    }
  }

  return rgb
}

/**
 * Convert tailwind colors to RGB values, for use in Pinceau & Tailwind.
 */
export function tailwindToRgb(
  colors: Record<string, string>,
  darkShade?: Record<string, string>
): Record<string, DesignToken<string>> {
  const rgb: Record<string, DesignToken<string>> = {}

  for (const name of Object.keys(colors)) {
    const token: ResponsiveToken<string> = {
      initial: toRgb(colors[name]),
    }

    if (darkShade && name in darkShade) {
      token.dark = toRgb(darkShade[name])
    }

    rgb[name] = {
      value: token,
    }
  }

  return rgb
}
