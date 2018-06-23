import service from '../../api/unitedInterface'

const state = {
  access_token: '',
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
  accessToken: state => state.access_token,
  userID: state => state.openid,
  username: state => state.nickname,
  sex: state => state.sex,
  headimgurl: state => state.headimgurl
}

const actions = {
  wxLogIn ({ commit, state }) {
    commit('generateAccessToken')
    service.postAccessTokenToServer(res => {
      console.log(res['data'])
      commit('setUserInfo', res['data'])
    }, state.access_token)
  }
}

const mutations = {
  generateAccessToken (state) {
    let generate = require('nanoid/generate')
    state.access_token = generate(service.genstr, 10)
    console.log(state.access_token)
  },
  setUserInfo (state, obj) {
    obj['access_token'] = state['access_token']
    for (let propertyName in state) {
      state[propertyName] = obj[propertyName]
    }
    console.log('set user info')
    console.log(state.headimgurl)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
