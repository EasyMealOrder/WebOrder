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
  // 获取当前商家所有菜品
  getDishesFromService (cb) {
    console.log('getDishesFromService called')
    axios.get('/api/dish/')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 消费者用
  // 获取所有菜品类型
  getDishTypesFromService (cb) {
    console.log('getDishTypesFromService called')

    axios.get('/api/category/')
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  // 生成accesstoken,openid作为用户标识，发送至服务器
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
  // 提交当前餐盘订单
  buyDishes (data, cb, errorCb) {
    let params = JSON.stringify(data)
    axios.post('/api/order/create/', params, {
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'content-type': 'application/json'
      }})
      .then(cb)
      .catch(error => {
        console.log(error.response['status'])
        errorCb(error.response['status'])
      })
  },

  // 消费者用
  // 根据cookie中的用户标识，从服务器取回历史订单
  getAllMyOrder (cb) {
    console.log('getAllToDoOrder called')

    axios.post('/api/order/getUserOrder/', null, {headers: {'X-CSRFToken': getCookie('csrftoken')}})
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  },

  postRateToService (data, cb) {
    let params = JSON.stringify(data)

    axios.post('/api/feedback/create/', params, {
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'content-type': 'application/json'
      }})
      .then(cb)
      .catch(error => {
        console.log(error)
      })
  }
}
