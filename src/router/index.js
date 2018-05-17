import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login/index.vue'
import Main from '../components/Main/index.vue'
import MainHome from '../components/Main/Home/Home.vue'
import Order from '../components/Main/Order/Order.vue'
import Myself from '../components/Main/Myself/Myself.vue'
import Plate from '../components/Main/Plate/plate.vue'

Vue.use(Router)

export default new Router({mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {path: 'home', name: 'Home', component: MainHome},
        {path: 'order', name: 'Order', component: Order},
        {path: 'myself', name: 'Myself', component: Myself},
        {path: 'plate', name: 'Plate', component: Plate}
      ]
    }
  ]
})
