import { createTheme, createThemeContract } from '@vanilla-extract/css'
import { colors } from './colors.css'

const backgrounds = {}

export const theme = createThemeContract({
  colorPrimary: null,
  colorSecondary: null,
  backgroundColorPrimary: null,
  backgroundColorSecondary: null,
  textColorPrimary: null,
  textColorSecondary: null,
})

export const lightTheme = createTheme(theme, {
  colorPrimary: colors.blue,
  colorSecondary: colors.grey,
  backgroundColorPrimary: colors.greyLight5,
  backgroundColorSecondary: colors.grey,
  textColorPrimary: colors.black,
  textColorSecondary: colors.greyLight1,
})

export const darkTheme = createTheme(theme, {
  colorPrimary: colors.blue,
  colorSecondary: colors.beigeLight1,
  backgroundColorPrimary: colors.black,
  backgroundColorSecondary: colors.beige,
  textColorPrimary: colors.greyLight1,
  textColorSecondary: colors.black,
})
