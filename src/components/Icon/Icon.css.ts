import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { pxToRem } from '../../utils/px-to-rem'

const iconSize = createVar()

const icon = recipe({
  base: {
    zIndex: 0,
    padding: 5,
    pointerEvents: 'none',
    display: 'block',
    width: iconSize,
    height: iconSize,
  },
  variants: {
    size: {
      '2xsmall': {
        vars: {
          [iconSize]: pxToRem(30),
        },
      },
      xsmall: {
        vars: {
          [iconSize]: pxToRem(35),
        },
      },
      small: {
        vars: {
          [iconSize]: pxToRem(45),
        },
      },
      medium: {
        vars: {
          [iconSize]: pxToRem(60),
        },
      },
      large: {
        vars: {
          [iconSize]: pxToRem(65),
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

globalStyle(`${icon} > svg`, {
  height: '100%',
})

export { icon }
