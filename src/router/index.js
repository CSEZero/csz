import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
