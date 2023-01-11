import { Directive } from 'vue'

export default {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = function (event: { target: any }) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
} as Directive
