import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import User from '../views/User.vue'





Vue.use(Router)


export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/User'
    },
    // {
    //   path: '/signin',
    //   name: 'sign-in',
    //   component: SignIn
    // },
    // {
    //   path: '/signup',
    //   name: 'sign-up',
    //   component: () => import('../views/SignUp.vue')
    // },

    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})