import { createStore } from 'vuex'

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

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
