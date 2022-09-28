import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false
  },
  getters: {
  },
  mutations: {
    SHOW(store, value) {
      store.showLogin = !store.showLogin
    }
  },
  actions: {
  },
  modules: {
  }
})
