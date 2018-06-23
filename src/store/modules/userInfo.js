import service from '../../api/unitedInterface'

const state = {
  openid: '',
  nickname: 'NICKNAME',
  sex: 1,
  province: 'PROVINCE',
  city: 'CITY',
  country: 'COUNTRY',
  headimgurl: '/static/images/timg.jpeg',
  privilege: [],
  unionid: ''
}

const getters = {
  userID: state => state.openid,
  username: state => state.nickname,
  sex: state => state.sex,
  headimgurl: state => state.headimgurl
}

const actions = {}

const mutations = {
  generateUserID (state) {
    let generate = require('nanoid/generate')
    state.openid = generate(service.genstr, 10)
    console.log(state.openid)
  },
  generateUsername (state) {
    let generate = require('nanoid/generate')
    let namenum = generate('1234567890', 3)
    state.nickname = '用户' + namenum.toString()
    console.log(state.nickname)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
