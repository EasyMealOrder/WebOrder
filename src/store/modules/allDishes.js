import service from '../../api/fakeService'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allDishes: state => state.all
}

// actions
const actions = {
  // 从服务器取回所有菜品
  // 存入 all 数组
  getAllDishes ({ commit }) {
    service.getDishesFromService(dishes => {
      commit('setAllDishes', dishes)
    })
  }
}

// mutations
const mutations = {
  // 重设 all 数组
  setAllDishes (state, dishes) {
    state.all = dishes
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
