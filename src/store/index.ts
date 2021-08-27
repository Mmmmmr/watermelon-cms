import { createStore } from 'vuex'

import { IRootState } from './types'
import loginModule from './login/login'

const store = createStore({
  state() {
    return {
      name: 'why'
    }
  },
  modules: {
    loginModule
  }
})

export default store
