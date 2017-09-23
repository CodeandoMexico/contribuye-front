import * as types from '../mutation-types'

const state = {
  greating: 'hello world'
}

const mutations = {
  [types.GREATING_SET_NAME] (state, { name }) {
    state.greating = `helo ${name}`
  }
}

const getters = {
  greating: state => state.greating
}

export default {
  state,
  getters,
  mutations
}
