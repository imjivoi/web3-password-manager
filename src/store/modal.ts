import { markRaw } from 'vue'
import { defineStore } from 'pinia'

export type Modal = {
  isOpen: boolean
  view: object
  props?: ModalProps
}

export type ModalProps = {
  label?: string
  successCallback?: (data?: any) => void
  closeCallback?: (data?: any) => void
}

export const useModal = defineStore('modal', {
  state: (): Modal => ({
    isOpen: false,
    view: {},
    props: {},
  }),
  actions: {
    open(view: object, props?: ModalProps) {
      this.isOpen = true
      this.props = props
      this.view = markRaw(view)
    },
    close() {
      this.isOpen = false
      this.view = {}
      this.props = {}
    },
  },
})
