/**
 * 订餐系统的统一对外模块
 */

import axios from 'axios'

export default {
  getDishesFromService (cb) {
    console.log('getDishesFromService called')
    axios.get('https://private-anon-1fd8f2407a-easymealorder.apiary-mock.com/dishes')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  buyDishes (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
