import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import allDishes from './modules/allDishes'
import userInfo from './modules/userInfo'
import orderCache from './modules/orderCache'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    allDishes,
    userInfo,
    orderCache
  },
  strict: debug
})
