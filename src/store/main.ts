import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isDark: false,
  }),
  actions: {
    setProvider() {},
    setDarkTheme(bool: boolean) {
      this.isDark = bool
    },
  },
})
