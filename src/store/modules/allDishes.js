import service from '../../api/unitedInterface'

// initial state
const state = {
  all: [],
  shownDishes: [],
  // 侧边栏菜品类型
  typeList: []
}

// getters
const getters = {
  allDishes: state => state.all,
  carouselDishes: state => state.all.slice(0, 4),
  allTypes: state => state.typeList,
  shownDishes: state => state.shownDishes
}

const actions = {
  // 从服务器取回所有菜品
  // 写入 all 数组, 写入typeList数组
  getAllDishes ({commit}) {
    /*
    service.getDishesFromService(res => {
      context.commit('setAllDishes', res['data']['allDish'])
      context.commit('setTypeList', res['data']['dishTypeList'])
      context.commit('setShownDishes', '全部')
    })
    */
    service.getDishTypesFromService(res => {
      commit('setTypeList', res['data'])
    })
    service.getDishesFromService(res => {
      commit('setAllDishes', res['data'])
      commit('setShownDishes', '全部')
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
    state.all = dishes.map(item => {
      return {
        name: item.name,
        description: item.description,
        num: 1,
        type: [item.dtype, '全部'],
        dish_img: service.apihost + item.pic,
        price: item.price,
        id: item.id
      }
    })
    console.log('setAllDishes call')
    console.log(state.all)
  },

  // 设置种类数组
  setTypeList (state, l) {
    state.typeList = [{'dtype': '全部'}].concat(l)
    // console.log(state.typeList)
  },

  // 按种类设置数组
  setShownDishes (state, t) {
    state.shownDishes = state.all.filter(item => item.type.includes(t))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
