import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/index.vue'
import Main from '../components/Main/index.vue'
import MainHome from '../components/Main/Home/Home.vue'
import Order from '../components/Main/Order/Order.vue'
import Myself from '../components/Main/Myself/Myself.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
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
            children:[
                {path: 'home', name:'Home', component: MainHome},
                {path: 'order', name: 'Order', component: Order},
                {path: 'myself', name: 'Myself', component:Myself}
            ]
        }
    ]
})
