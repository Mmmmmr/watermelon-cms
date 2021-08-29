import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { globalRegister } from './global'
import '@/assets/css/index.less'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
