import { style } from '@vanilla-extract/css'
import { pxToRem } from '../../utils/px-to-rem'
import { vars } from '../../styles/root.css'
import breakpoints from '../../styles/breakpoints'

export const card = style({
  minWidth: pxToRem(200),
  minHeight: pxToRem(100),
  width: '100%',
  borderRadius: 15,
  backgroundColor: vars.theme.backgroundColorSecondary,
  padding: `${pxToRem(15)} ${pxToRem(20)}`,
})
