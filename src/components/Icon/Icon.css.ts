import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const icon = recipe({
  base: {
    zIndex: 0,
    padding: 5,
    pointerEvents: 'none',
    display: 'block',
  },
  variants: {
    size: {
      xsmall: {
        width: '35px',
        height: '35px',
      },
      small: {
        width: '45px',
        height: '45px',
      },
      medium: {
        width: '60px',
        height: '60px',
      },
      large: {
        width: '65px',
        height: '65px',
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
