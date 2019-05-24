export const state = () => ({
  comick: {
    title: '',
    cuadros: []
  }
})

export const mutations = {
  SET_COMICK(state, comick) {
    state.comick = comick
  }
}

export const actions = {
  set({ commit }, comick) {
    commit('SET_COMICK', comick)
  }
}

export const getters = {
  getComick(state) {
    return state.comick
  }
}
