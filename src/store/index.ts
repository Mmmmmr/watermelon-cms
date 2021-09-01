import { createStore } from 'vuex'

import login from './login/login'

const store = createStore({
  state() {
    return {
      name: 'why'
    }
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
