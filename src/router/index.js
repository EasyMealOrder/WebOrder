import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login/index.vue'
import Main from '../components/Main/index.vue'
import MainHome from '../components/Main/Home/Home.vue'
import Order from '../components/Main/Order/Order.vue'
import Myself from '../components/Main/Myself/Myself.vue'
import PlateWrapper from '../components/Main/Plate/PlateWrapper.vue'
import PayResult from '../components/payResult'
import CookEnd from '../components/CookEnd/CookEnd'

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
        {path: 'home/:id', name: 'Home', component: MainHome},
        {path: 'order', name: 'Order', component: Order},
        {path: 'myself', name: 'Myself', component: Myself},
        {path: 'plate', name: 'PlateWrapper', component: PlateWrapper}
      ]
    },
    {
      path: '/payResult',
      name: 'PayResult',
      component: PayResult
    },
    {
      path: '/cookEnd',
      name: 'cookEndPage',
      component: CookEnd
    }
  ]
})
