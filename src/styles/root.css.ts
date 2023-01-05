import {
  createGlobalTheme,
} from '@vanilla-extract/css'
import { colors } from './colors.css'
import { spaces } from './space.css'
import { theme } from './theme.css'

const root = createGlobalTheme(':root', {
  space: spaces,
  color: colors,
})



export const vars = { ...root, theme }
