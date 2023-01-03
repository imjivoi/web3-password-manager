import { recipe } from '@vanilla-extract/recipes'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import breakpoints from './breakpoints'
import { pxToRem } from '../utils/px-to-rem'

export const spaces = {
  none: '0',
  '2xsmall': pxToRem(10),
  xsmall: pxToRem(14),
  small: pxToRem(20),
  medium: pxToRem(30),
  large: pxToRem(40),
  xlarge: pxToRem(60),
} as const

export const spacesKeys = Object.keys(spaces)
export const spacesValues = Object.values(spaces)

export type SpaceType = typeof spaces

const values = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'mobile',
  properties: {
    margin: { ...spaces, auto: 'auto' },
    marginTop: { ...spaces, auto: 'auto' },
    marginBottom: { ...spaces, auto: 'auto' },
    marginRight: { ...spaces, auto: 'auto' },
    marginLeft: { ...spaces, auto: 'auto' },
    padding: { ...spaces, auto: 'auto' },
    paddingTop: { ...spaces, auto: 'auto' },
    paddingBottom: { ...spaces, auto: 'auto' },
    paddingRight: { ...spaces, auto: 'auto' },
    paddingLeft: { ...spaces, auto: 'auto' },
    gap: spaces,
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'marginTop',
      'marginBottom',
      'marginRight',
      'marginLeft',
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

export const spaceSprinkles = createSprinkles(values)
