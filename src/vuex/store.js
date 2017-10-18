import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 10
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    const a = state.count += 10
    return a
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
