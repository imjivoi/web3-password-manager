import { defineStore } from 'pinia'
import randomId from '../utils/random-id'

interface Notification {
  type?: 'neutral' | 'success' | 'warning' | 'error'
  content: string
  id: string
}

interface ShowNotification extends Omit<Notification, 'id'> {
  timeout?: number
}

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [] as Notification[],
    limit: 5,
  }),
  actions: {
    show({ type = 'neutral', content, timeout = 1000 }: ShowNotification) {
      if (this.notifications.length === this.limit) return
      const id = randomId()
      this.notifications.push({ type, content, id })
      setTimeout(() => {
        this.remove(id)
      }, timeout)
    },
    remove(id: string) {
      this.notifications = this.notifications.filter((item) => item.id !== id)
    },
  },
})
