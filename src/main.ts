import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { globalRegister } from './global'
import miRequest from './service'
import '@/assets/css/index.less'

miRequest.request({
  url: '/api?id=1302425',
  method: 'GET',
  interceptors: {
    requestInterceptor(config) {
      console.log('局部请求拦截')
      return config
    },
    responseInterceptor(res) {
      console.log('局部响应拦截')
      return res
    }
  }
})
const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
