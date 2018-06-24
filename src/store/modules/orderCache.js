const state = {
  currentOrder: {
    order: {
      table: null,
      price: null,
      note: ''
    },
    dishrecord: []
  },
  historyOrder: []
}

const getters = {
  currentOrder: state => state.currentOrder,
  historyOrder: state => state.historyOrder
}

const actions = {}

const mutations = {
  setCurrentOrder (state, order) {
    state.currentOrder = order
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
