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
  tableID: null,
  historyOrder: []
}

const getters = {
  accessToken: state => state.access_token,
  userID: state => state.openid,
  username: state => state.nickname,
  sex: state => state.sex,
  headimgurl: state => state.headimgurl,
  tableID: state => state.tableID,
  historyOrder: state => state.historyOrder
}

const actions = {
  wxLogIn ({ commit, state }, { router, page }) {
    console.log(state.openid)
    service.postAccessTokenToServer(res => {
      commit('setUserInfo', res['data'])
      router.replace(page)
    },
    {
      accesstoken: state.access_token,
      openid: state.openid
    })
  },
  getHistoryOrderFromService ({commit}) {
    service.getAllMyOrder(res => {
      commit('setHistoryOrder', res['data'])
    })
  }
}

const mutations = {
  generateAccessToken (state) {
    // 生成用户标识
    let generate = require('nanoid/generate')
    state.access_token = generate(service.genstr, 10)
    console.log(state.access_token)
  },
  generateOpenId (state) {
    let generate = require('nanoid/generate')
    state.openid = generate(service.genstr, 6)
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
  },
  setHistoryOrder (state, data) {
    state.historyOrder = data
    console.log('set history order')
    console.log(state.historyOrder)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
