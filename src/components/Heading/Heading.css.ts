import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'

export const headingCss = recipe({
  base: { fontWeight: 500, marginBottom: vars.space.small },
  variants: {
    size: {
      small: { fontSize: '20px' },
      medium: { fontSize: '24px' },
      large: { fontSize: '32px' },
      xlarge: { fontSize: '44px' },
    },
    position: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    size: 'large',
    position: 'left',
  },
})
