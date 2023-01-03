import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import './styles/app.css'
import clickOutside from './directives/click-outside'

const app = createApp(App)

app
  .directive('click-outside', clickOutside)
  .use(createPinia())
  .use(router)
  .mount('#app')
