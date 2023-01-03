import { generateColors, RGBAToHex } from '../utils'

// const colorsKeys

export const baseColors = {
  yellow: '#ffbe0b',
  orange: '#fb5607',
  purple: '#8338ec',
  white: '#fff',
  black: '#1c1c1c',
} as const
export const mainColors = {
  blue: '#3a86ff',
  red: '#ff006e',
  green: '#0FFF95',
  grey: '#eef0f2',
  beige: '#252525',
}
type BaseColors = keyof typeof baseColors
type MainColors = keyof typeof mainColors
type LightColors =
  | 'redLight1'
  | 'redLight2'
  | 'redLight3'
  | 'redLight4'
  | 'redLight5'
  | 'blueLight1'
  | 'blueLight2'
  | 'blueLight3'
  | 'blueLight4'
  | 'blueLight5'
  | 'greenLight1'
  | 'greenLight2'
  | 'greenLight3'
  | 'greenLight4'
  | 'greenLight5'
  | 'greyLight1'
  | 'greyLight2'
  | 'greyLight3'
  | 'greyLight4'
  | 'greyLight5'
  | 'beigeLight1'
  | 'beigeLight2'
  | 'beigeLight3'
  | 'beigeLight4'
  | 'beigeLight5'

export const themeColors = Object.entries(mainColors).reduce(
  (obj, [key, val]) => {
    const { primary } = generateColors(val)
    const _colors = primary?.slice(0, 6) as string[]
    _colors.forEach((_color, idx) => {
      if (idx === 0) {
        //@ts-ignore
        obj[`${key}`] = _color
      } else {
        //@ts-ignore
        obj[`${key}Light${idx}`] = _color
      }
    })

    return obj
  },
  {}
) as Record<string, string>
export type ColorType = BaseColors | MainColors | LightColors

export const colors = { ...baseColors, ...themeColors } as Record<
  ColorType,
  string
>
