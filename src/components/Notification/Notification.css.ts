import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const notificationOverflow = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  padding: vars.space.xlarge,
  transition: 'all 0.3s',
})

const notification = recipe({
  base: {
    width: '250px',
    height: 'max-content',
    borderRadius: 10,
    color: vars.color.white,
    padding: vars.space.small,
    marginTop: vars.space.small,
    // right: 0,
    // top: 0,
    transition: 'all 0.3s',
    ':first-child': {
      margin: 0,
    },
  },
  variants: {
    type: {
      success: {
        background: vars.color.green,
      },
      error: {
        background: vars.color.red,
      },
      neutral: {
        background: vars.color.blue,
      },
      warning: {
        background: vars.color.yellow,
      },
    },
  },
  defaultVariants: {
    type: 'neutral',
  },
})

export { notification, notificationOverflow }
