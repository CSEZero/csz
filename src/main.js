import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/flexible'
import './assets/reset.css'
import api from './request/api'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$api = api
Vue.config.productionTip = false

// 完整引入element-ui
Vue.use(Element, { size: 'small', zIndex: 3000 })
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
