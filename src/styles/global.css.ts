import { globalStyle, keyframes } from '@vanilla-extract/css'
import { colors } from './colors'
import { vars } from './root.css'
import { toRgba } from '../utils/to-rgba'

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  overflow: 'hidden',
})

globalStyle('*', {
  fontFamily: 'Roboto',
  fontSize: 16,
  fontWeight: 400,
  transition: '0.1s',
  boxSizing: 'border-box',
})

globalStyle('&-enter, &-leave-to', {
  opacity: 0,
})

globalStyle('a', {
  textDecoration: 'none',
  display: 'block',
  fontSize: 'unset',
  fontWeight: 'unset',
  color: 'unset',
})

// globalStyle('#app', {
//   background: vars.theme.background,
//   width: '100vw',
//   height: '100vh',
//   overflowY: 'auto',
// })

globalStyle('body', {
  height: '100vh',
  color: vars.theme.textPrimary,
  scrollbarColor: `${vars.color.blue} transparent`,
  background: vars.theme.backgroundPrimary,
})

globalStyle('h1,h2,h3,p', {
  margin: 0,
})

globalStyle('::-webkit-scrollbar', {
  width: 17,
})

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
})

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.blue,
  backgroundClip: ' padding-box',
  borderRadius: 30,
  minHeight: 100,
  border: '6px solid rgba(0, 0, 0, 0)',
})
