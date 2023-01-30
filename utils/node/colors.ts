import chroma from 'chroma-js'
import type { DesignToken } from 'pinceau'

export const toRgb = (color: string): string => {
  if (!color) {
    return '0 0 0'
  }

  return chroma(color)
    .rgb()
    .map((v) => {
      if (isNaN(v)) {
        return 0
      }

      return Math.round(v)
    })
    .slice(0, 3) // Remove alpha
    .join(' ')
}

export function paletteToRgb<T extends Record<string, DesignToken<string>>>(
  colors: T
): Record<string, DesignToken<string>> {
  const rgb: Record<string, DesignToken<string>> = { ...colors }

  for (const name of Object.keys(colors)) {
    rgb[name].value = toRgb(colors[name].value as string)
  }

  return rgb
}

export function tailwindToRgb(
  colors: Record<string, string>
): Record<string, DesignToken<string>> {
  const rgb: Record<string, DesignToken<string>> = {}

  for (const name of Object.keys(colors)) {
    rgb[name] = {
      value: toRgb(colors[name]),
    }
  }

  return rgb
}
