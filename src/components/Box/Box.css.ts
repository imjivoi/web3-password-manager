import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

export default style({
  maxWidth: 600,
  width: '100%',
  padding: vars.space.medium,
  borderRadius: 20,
  background: vars.theme.textSecondary,
  boxShadow: `0px 8px 24px ${vars.color.black}`,
})
