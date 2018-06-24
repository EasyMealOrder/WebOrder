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
  unionid: '',
  tableID: null
}

const getters = {
  accessToken: state => state.access_token,
  userID: state => state.openid,
  username: state => state.nickname,
  sex: state => state.sex,
  headimgurl: state => state.headimgurl,
  tableID: state => state.tableID
}

const actions = {
  wxLogIn ({ commit, state }, { router, page }) {
    commit('generateAccessToken')
    service.postAccessTokenToServer(res => {
      commit('setUserInfo', res['data'])
      router.push(page)
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
    for (let propertyName in obj) {
      state[propertyName] = obj[propertyName]
    }
    console.log('set user info')
    console.log(state.headimgurl)
  },
  setTableID (state, num) {
    state.tableID = num
    console.log('set table id in state')
    console.log(state.tableID)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
