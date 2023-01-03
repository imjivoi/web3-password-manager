import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/root.css'
import { toRgba } from '../../utils/to-rgba'
import { darkTheme } from '../../styles/theme.css'

const shimmer = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
})

const skeletonCss = style({
  display: 'inline-block',
  height: '1em',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#DDDBDD',
  borderRadius: 10,
  ':after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    background: `linear-gradient(90deg,
        rgba(255,255,255, 0) 0,
        rgba(255,255,255, 0.2) 20%,
        rgba(255,255,255, 0.5) 60%,
        rgba(255,255,255, 0)
      )`,
    animation: `${shimmer} 2s infinite`,
    content: '',
  },
})

globalStyle(`${darkTheme} .${skeletonCss}`, {
  backgroundColor: vars.color.black,
})

export { skeletonCss }
