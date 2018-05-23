// import service from '../../api/fakeService'
import axios from 'axios'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allDishes: state => state.all
}

const actions = {
  // 从服务器取回所有菜品
  // 存入 all 数组
  getAllDishes ({ commit }) {
    axios.get('https://private-anon-1fd8f2407a-easymealorder.apiary-mock.com/dishes')
      .then(res => {
        console.log(typeof res['data'])
        commit('setAllDishes', res['data'])
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
