/**
 * 订餐系统的统一对外模块
 */

import axios from 'axios'

const apihost = 'http://193.112.24.51:8000'
const genstr = '1234567890abcdefghijklmnopqrstuvwxyz'

var getCookie = (name) => {
  let value = '; ' + document.cookie
  let parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop().split(';').shift()
}

export default {
  genstr,
  apihost,

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

  postAccessTokenToServer (cb, {accesstoken, openid}) {
    console.log('postAcessTokenToServer')

    let params = new URLSearchParams()
    params.append('access_token', accesstoken)
    params.append('openid', openid)
    axios.post('/api/wxLogin/', params, {headers: {'X-CSRFToken': getCookie('csrftoken')}})
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 消费者用
  buyDishes ({ order, dishrecord }, cb, errorCb) {
    let params = new URLSearchParams()
    params.append('order', order)
    params.append('dishrecord', dishrecord)

    console.log(order)
    console.log(dishrecord)
    axios.post('/api/order/create/', params, {headers: {'X-CSRFToken': getCookie('csrftoken')}})
      .then(cb)
      .catch(error => {
        console.log(error.response['status'])
        errorCb(error.response['status'])
      })
  },

  // 消费者用
  // 暂定用session作为标识
  getAllMyOrder (userSession, cb) {
    console.log('getAllToDoOrder called')

    axios.get('/api/order/pages/4/1/')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  }
}
