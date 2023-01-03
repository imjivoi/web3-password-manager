import { globalStyle } from '@vanilla-extract/css'

globalStyle('.fade-slide-enter-active, .fade-slide-leave-active', {
  transition: 'all .5s',
})

globalStyle('.fade-slide-leave-to, .fade-slide-enter-from', {
  opacity: 0,
  transform: 'translateX(50px)',
})

globalStyle('.fade-top-enter-active, .fade-top-leave-active', {
  transition: 'all .5s',
})

globalStyle('.fade-top-leave-to, .fade-top-enter-from', {
  opacity: 0,
  transform: 'translateY(20px)',
})

globalStyle('.top-enter-active, .fade-top-leave-active', {
  transition: 'all .5s',
})

globalStyle('.top-enter-from', {
  opacity: 0,
  transform: 'translateY(20px)',
})

globalStyle('.top-leave-to', {
  transform: 'translateY(-20px)',
})
