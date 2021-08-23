import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { globalRegister } from './global'
import miRequest from './service'

miRequest.request({
  url: '/api?id=1302425',
  method: 'GET'
})
const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
