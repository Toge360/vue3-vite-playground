import createPersistedState from "vuex-persistedstate"; // keep state @ refresh
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({

  state () {
    return {
      count: 0
    }
  },

  mutations: {
    increment (state) {
      state.count++
    }
  },

  getters: {},
  actions: {},
  plugins: [createPersistedState()]
})

export default store