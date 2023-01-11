import { globalStyle, style } from '@vanilla-extract/css'
import {  vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'
import { lightTheme } from '../../styles/theme.css'

const passwordsContainer = style({
  maxHeight: '50vh',
  overflowY: 'auto',
  //   paddingRight: 10,
})

const passwordItem = style({
  borderRadius: 20,
  background: toRgba(vars.color.blue, 0.5),
})

const header = style({
  fontWeight: 500,
})

const itemData = style({
  fontSize: 18,
})

globalStyle(`${passwordItem} + ${passwordItem}`, {
  marginTop: vars.space.xsmall,
})

globalStyle(`${lightTheme} .${passwordItem}`, {
  background: toRgba(vars.color.blue),
})

export { passwordItem, header, itemData, passwordsContainer }
