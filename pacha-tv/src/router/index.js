import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'new',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
  },
  {
    path: '/video/:id',
    name: 'show',
    component: () => import('../views/Show.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/Edit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
