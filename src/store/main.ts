import { defineStore } from 'pinia'
import { darkTheme, lightTheme } from '../styles/theme.css'
import Storage from '../services/storage'

type Theme = 'light' | 'dark'
export const useMainStore = defineStore('main', {
  state: () => ({
    theme: 'light' as Theme,
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
    setTheme(theme: Theme) {
      this.theme = theme
      Storage.set('theme', theme)
      if (theme === 'dark') {
        document.body.classList.add(darkTheme)
        document.body.classList.remove(lightTheme)
      } else {
        document.body.classList.remove(darkTheme)
        document.body.classList.add(lightTheme)
      }
    },
    initTheme() {
      const theme = (Storage.get('theme') as Theme) || 'light'
      this.setTheme(theme)
    },
  },
  getters: {
    isDarkTheme: (state) => state.theme === 'dark',
  },
})
