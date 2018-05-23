// import service from '../../api/fakeService'
import axios from 'axios'

// initial state
const state = {
  all: [],
  typeList: []
}

// getters
const getters = {
  allDishes: state => state.all,
  allTypes: state => state.typeList
}

const actions = {
  // 从服务器取回所有菜品
  // 写入 all 数组, 写入typeList数组
  getAllDishes ({ commit }) {
    axios.get('https://private-anon-1fd8f2407a-easymealorder.apiary-mock.com/dishes')
      .then(res => {
        commit('setAllDishes', res['data']['allDish'])
        commit('setTypeList', res['data']['dishTypeList'])
      })
      .catch(error => {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  // 重设 all 数组
  setAllDishes (state, dishes) {
    state.all = dishes
    console.log(state.all)
  },

  // 设置种类数组
  setTypeList (state, l) {
    state.typeList = l
    console.log(state.typeList)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
