import * as types from './HashFilterTypes'
const METHODS = {
  1: 'new',
  2: 'comments'
}

export default {
  state: {
    labels: [],
    sortMethod: METHODS[1],
    options: []
  },
  mutations: {
    [types.SET_LABELS] (state, labels) {
      state.labels = labels
    },
    [types.SET_SORT_METHOD] (state, method) {
      state.sortMethod = METHODS[method]
    },
    [types.SET_FILTER_OPTIONS] (state, options) {
      state.options = options
    },
    [types.SET_ABSOLUTE] (state, absolute) {
      state.absolue = absolute
    }
  },
  getters: {
    [types.GET_LABELS] (state) {
      return state.labels
    },
    [types.GET_SORT_METHOD] (state) {
      return state.sortMethod
    },
    [types.GET_FILTER_OPTIONS] (state) {
      return state.options
    },
    [types.GET_ABSOLUTE] (state) {
      return state.absolue
    }
  },
  actions: {
    scroll ({commit, state}) {
      return Promise.resolve(true)
    }
  }
}
