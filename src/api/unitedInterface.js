/**
 * 订餐系统的统一对外模块
 */

import axios from 'axios'

const apihost = 'http://193.112.24.51:8000'

export default {
  // 厨师用
  apihost,
  getAllToDoOrder (cb) {
    console.log('getAllToDoOrder called')
    axios.get('https://private-anon-1fd8f2407a-easymealorder.apiary-mock.com/menus')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 厨师用
  finishADishInAOrder: function (orderId, dishId, cb, errorCb) {
    // todo: 向后端更新状态
    // 成功则cb
    cb()
    // 失败则errorCb
  },

  // 厨师用
  finishAOrder: function (orderIdk, cb, errorCb) {
    // todo：像后端更新状态
    // 成功则cb
    cb()
    // 失败则errorCb
  },

  // 消费者用
  getDishesFromService (cb) {
    console.log('getDishesFromService called')
    axios.get('/api/dish/')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 消费者用
  getDishTypesFromService (cb) {
    console.log('getDishTypesFromService called')

    axios.get('/api/category/')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 消费者用
  buyDishes (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },

  // 消费者用
  // 暂定用session作为标识
  getAllMyOrder (userSession, cb) {
    this.getAllToDoOrder(cb)
  }
}
