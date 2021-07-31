import { createRouter, createWebHashHistory } from 'vue-router'

import Pengalaman from '../views/Pengalaman.vue'
import Tracker from '../views/Tracker.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pengalaman',
    name: 'Pengalaman',
    component: Pengalaman
  },
  {
    path: '/tracker',
    name: 'Trackeer',
    component: Tracker
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
