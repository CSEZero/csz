import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录注册页面
    showLogin: false,
    // 登录注册文字
    loginTxt: true
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
