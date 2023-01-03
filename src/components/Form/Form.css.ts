import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'

const formCss = style({
})

globalStyle(`${formCss} > *:not(:last-child)`, {
  marginBottom: vars.space.small,
})

export default formCss
