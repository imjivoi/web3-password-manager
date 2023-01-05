import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isDark: false,
    globalLoading: {
      isActive: false,
      text: '',
    },
  }),
  actions: {
    setGlobalLoading(active: boolean, text?: string) {
      this.globalLoading.isActive = active
      this.globalLoading.text = text || ''
    },
    setDarkTheme(bool: boolean) {
      this.isDark = bool
    },
  },
})
