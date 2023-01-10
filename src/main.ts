import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { useWalletStore } from './store/wallet'
import Storage from './services/storage'
import './styles/app.css'
import clickOutside from './directives/click-outside'

const app = createApp(App)
  .directive('click-outside', clickOutside)
  .use(createPinia())
  .use(router)

const walletStore = useWalletStore()
router.beforeEach((to) => {
  if (to.path.includes('app') && !walletStore.isLogged) {
    return '/'
  }
})

app.mount('#app')
