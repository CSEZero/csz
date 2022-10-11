import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/index.vue'
import NotFoundPage from '../views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue')
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
