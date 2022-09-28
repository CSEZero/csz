import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/flexible'
import './assets/reset.css'

Vue.config.productionTip = false

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
