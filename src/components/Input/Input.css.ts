import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'
import { darkTheme } from '../../styles/theme.css'
import { pxToRem } from '../../utils/px-to-rem'

const inputBase = style({
  outline: 'none',
  border: `1px solid transparent`,
  borderRadius: 10,
  fontWeight: 400,
  fontSize: 16,
  width: '100%',
  background: 'transparent',
  color: 'unset',
  ':focus': {
    border: `1px solid ${vars.theme.colorPrimary}`,
  },
})

const input = recipe({
  base: inputBase,
  variants: {
    size: {
      medium: {
        padding: `${pxToRem(15)} ${pxToRem(20)}`,
      },
      small: {
        padding: `${pxToRem(10)} ${pxToRem(15)}`,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const inputContainerBase = style({
  background: vars.color.greyLight5,
  border: '1px solid transparent',
  borderRadius: 10,
  display: 'flex',
})

globalStyle(`${darkTheme} .${inputContainerBase}`, {
  background: vars.color.beigeLight1,
  color: vars.color.grey,
})

const inputContainer = recipe({
  base: inputContainerBase,
  variants: {
    status: {
      neutral: {
        // borderColor: vars.color.purple,
      },
      success: {
        borderColor: vars.color.green,
      },
      error: {
        borderColor: vars.color.red,
      },
    },
    size: {
      medium: {},
    },
  },
})

const message = recipe({
  base: {
    fontSize: 12,
  },
  variants: {
    status: {
      neutral: {
        // color: vars.color.purple,
      },
      success: {
        color: vars.color.green,
      },
      error: {
        color: vars.color.red,
      },
    },
  },
  defaultVariants: {
    status: 'neutral',
  },
})

export { input, message, inputContainer }
