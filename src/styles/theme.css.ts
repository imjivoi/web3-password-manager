import { createTheme, createThemeContract } from "@vanilla-extract/css"
import { colors } from "./colors"

const backgrounds = {}

export const theme = createThemeContract({
  backgroundPrimary: null,
  backgroundSecondary: null,
  textPrimary: null,
  textSecondary: null,
})

export const lightTheme = createTheme(theme, {
  backgroundPrimary: colors.greyLight5,
  backgroundSecondary: colors.grey,
  textPrimary: colors.black,
  textSecondary: colors.greyLight1,
})

export const darkTheme = createTheme(theme, {
  backgroundPrimary: colors.black,
  backgroundSecondary: colors.beige,
  textPrimary: colors.greyLight1,
  textSecondary: colors.black,
})