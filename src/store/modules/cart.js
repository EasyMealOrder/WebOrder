import service from '../../api/unitedInterface'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null,
  currentOrder: {
    order: {
      table: null,
      price: null,
      note: ''
    },
    dishrecord: []
  }
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  // 返回当前订单
  currentOrder: state => state.currentOrder,
  // 检查购物车是否为空
  checkIfEmpty: state => state.added.length,

  dishrecord: (state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const dish = rootState.allDishes.all.find(dish => dish.id === id)
      return {
        dishID: id,
        name: dish.name,
        number: quantity,
        price: dish.price
      }
    })
  },

  cartDishes: (state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const dish = rootState.allDishes.all.find(dish => dish.id === id)
      return {
        id,
        name: dish.name,
        description: dish.description,
        dish_img: dish.dish_img,
        price: dish.price,
        quantity
      }
    })
  },

  // 计算当前餐盘订单总价
  cartTotalPrice: (state, getters) => {
    return getters.cartDishes.reduce((total, dish) => {
      return total + dish.price * dish.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, {dishes, route, message}) {
    console.log(dishes)
    console.log('route', route)
    const savedCartItems = [...state.added]
    commit('setCheckoutStatus', null)
    // 重置餐盘
    commit('setCartItems', { items: [] })
    // 向服务器提交订单
    service.buyDishes(
      dishes,
      () => {
        commit('setCheckoutStatus', 'successful')
        console.log('------------success')
        // todo:跳转到成功页面
        route.push('/payResult')
      },
      (status) => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
        console.log('------------fail')
        // todo: 跳转到失败页面
        message('网络错误 ' + status)
      }
    )
  },

  // 向餐盘中添加菜品
  // 如果菜品已存在，增加其数量
  addDishToCart ({ state, commit }, dish) {
    commit('setCheckoutStatus', null)
    const cartItem = state.added.find(item => item.id === dish.id)
    if (!cartItem) {
      commit('pushDishToCart', { id: dish.id })
    } else {
      commit('incrementItemQuantity', cartItem)
    }
  },

  // 从餐盘中减少菜品数量
  // 当某个菜品数量减为0时移除该菜品
  minusDishFromCart ({ state, commit }, dish) {
    commit('setCheckoutStatus', null)
    const cartItem = state.added.find(item => item.id === dish.id)
    if (!cartItem || cartItem.quantity === 1) {
      commit('deleteDishFromCart', { id: dish.id })
    } else {
      commit('decrementItemQuantity', cartItem)
    }
  }
}

// mutations
const mutations = {
  setCurrentOrder (state, order) {
    console.log('set current order call')
    console.log(order)
    state.currentOrder = order
  },
  pushDishToCart (state, { id }) {
    state.added.push({
      id,
      quantity: 1
    })
  },

  deleteDishFromCart (state, {id}) {
    function indexOf (arr, id) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return i
        }
      }
      return -1
    }
    state.added.splice(indexOf(state.added, id), 1)
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
  },

  decrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity--
  },

  setCartItems (state, { items }) {
    state.added = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
    console.log('checkout' + status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
