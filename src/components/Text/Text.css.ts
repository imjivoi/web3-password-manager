import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

export const textCss = recipe({
  base: {},
  variants: {
    size: {
      small: { fontSize: 12 },
      medium: { fontSize: 14 },
      large: { fontSize: 16 },
      xlarge: { fontSize: 18 },
    },
    color: {
      primary: { color: vars.color.black },
      accent: { color: vars.color.purple },
      secondary: { color: vars.color.greenLight1 },
    },
    weight: {
      default: { fontWeight: 400 },
      accent: { fontWeight: 500 },
    },
  },
  defaultVariants: {
    size: 'large',
    color: 'primary',
    weight: 'default',
  },
})
