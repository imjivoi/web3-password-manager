import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'

const switchInput = style({
  height: 0,
  width: 0,
  visibility: 'hidden',
  position: 'absolute',
})
const switchLabel = style({
  cursor: 'pointer',
  textIndent: '-9999px',
  width: '100%',
  height: '100%',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  transition: '0.3s',
  zIndex: 1,

  ':after': {
    content: '',
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '20px',
    height: '20px',
    background: '#fff',
    borderRadius: '20px',
    transition: '0.3s',
  },
})

const switchBackground = style({
  background: vars.color.grey,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

globalStyle(`${switchLabel}:active:after`, {
  width: '30px',
})

globalStyle(`${switchInput}:checked + ${switchLabel}:after`, {
  left: 'calc(100% - 5px)',
  transform: 'translateX(-100%)',
})

globalStyle(`${switchInput}:checked ~ ${switchBackground}`, {
  background: vars.color.blue,
})

const switchContainer = style({
  display: 'flex',
  position: 'relative',
  width: '60px',
  height: '30px',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '30px',
})

export { switchInput, switchLabel, switchContainer, switchBackground }
