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
          [iconSize]: pxToRem(25),
        },
      },
      xsmall: {
        vars: {
          [iconSize]: pxToRem(30),
        },
      },
      small: {
        vars: {
          [iconSize]: pxToRem(35),
        },
      },
      medium: {
        vars: {
          [iconSize]: pxToRem(45),
        },
      },
      large: {
        vars: {
          [iconSize]: pxToRem(50),
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})


export { icon }
