import Vue from 'vue'
import VueRouter from 'vue-router'


let routes = [
  {
    path: '/',
    name: 'home',
    icon: 'mdi-monitor-dashboard',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path: '/404',
    name: '404',
    icon: '',
    inNav: false,
    component: () => import('../views/404.vue'),
    meta: {
      requiresAuth: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})


/* Navigation Guard 
Prevents access to a blocked route
https://router.vuejs.org/guide/advanced/navigation-guards.html*/

router.beforeEach((to, from, next) => {
  //
})

export default router