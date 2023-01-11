import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

export default style({
  resize: 'none',
  border: `2px solid ${vars.color.greyLight1}`,
  borderRadius: 20,
  background: vars.color.grey,
  padding: '10px 20px',
  outline: 'none',
  width: '100%',
  lineHeight: 1.6,
})
