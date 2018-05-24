// import service from '../../api/fakeService'
import axios from 'axios'

// initial state
const state = {
  all: [],
  shownDishes: [],
  typeList: []
}

// getters
const getters = {
  allDishes: state => state.all,
  allTypes: state => state.typeList,
  shownDishes: state => state.shownDishes
}

const actions = {
  // 从服务器取回所有菜品
  // 写入 all 数组, 写入typeList数组
  getAllDishes (context) {
    axios.get('https://private-anon-1fd8f2407a-easymealorder.apiary-mock.com/dishes')
      .then(res => {
        context.commit('setAllDishes', res['data']['allDish'])
        context.commit('setTypeList', res['data']['dishTypeList'])
        context.commit('setShownDishes', '全部')
      })
      .catch(error => {
        console.log(error)
      })
  },

  // 按类显示菜单
  showDishesByType ({commit}, type) {
    commit('setShownDishes', type)
  }
}

// mutations
const mutations = {
  // 重设 all 数组
  setAllDishes (state, dishes) {
    state.all = dishes
    // console.log(state.all)
  },

  // 设置种类数组
  setTypeList (state, l) {
    state.typeList = l
    // console.log(state.typeList)
  },

  // 按种类设置数组
  setShownDishes (state, t) {
    state.shownDishes = state.all.filter(item => item.type.includes(t))
    console.log(state.shownDishes)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
