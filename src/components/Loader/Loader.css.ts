import {
  createVar,
  fallbackVar,
  globalStyle,
  keyframes,
  style,
} from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'

const ring = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const loaderContainerSize = '40px'
const loaderSize = '32px'

export const loaderColor = createVar()

const loader = style({
  display: 'inline-block',
  position: 'relative',
  width: `${loaderContainerSize}`,
  height: `${loaderContainerSize}`,
})

globalStyle(`${loader} > div`, {
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  width: `${loaderSize}`,
  height: `${loaderSize}`,
  margin: '4px',
  border: `4px solid ${fallbackVar(loaderColor, vars.color.white)}`,
  borderRadius: '50%',
  animation: `${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderColor: `${fallbackVar(
    loaderColor,
    vars.color.white
  )} transparent transparent transparent`,
})

globalStyle(`${loader} > div:nth-child(1)`, {
  animationDelay: '-0.45s',
})
globalStyle(`${loader} > div:nth-child(2)`, {
  animationDelay: '-0.3s',
})
globalStyle(`${loader} > div:nth-child(3)`, {
  animationDelay: '-0.15s',
})

export { loader }
