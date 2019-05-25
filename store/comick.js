export const state = () => ({
  comick: {
    cuadros: []
  }
})

export const mutations = {
  SET_COMICK(state, comick) {
    state.comick = comick
  },
  UPDATE_TITLE(state, value) {
    state.comick.title = value
  },
  ADD_CATEGORY(state, newCategory) {
    state.comick.category.push(newCategory)
  },
  DELETE_CATEGORY(state, index) {
    state.comick.category.splice(index, 1)
  },
  ADD_CUADRO(state, indexCuadro, newCuadro) {
    state.comick.cuadros.splice(indexCuadro, 0, newCuadro)
  },
  DELETE_CUADRO(state, index) {
    state.comick.cuadros.splice(index, 1)
  },
  DUPLICATE_CUADRO(state, indexCuadro, newCuadro) {
    state.comick.cuadros.splice(indexCuadro, 0, newCuadro)
  }
}

export const actions = {
  setComick({ commit }, comick) {
    commit('SET_COMICK', comick)
  },
  updateTitle({ commit }, value) {
    commit('UPDATE_TITLE', value)
  },
  addCategory({ commit }, newCategory) {
    commit('ADD_CATEGORY', newCategory)
  },
  deleteCategory({ commit }, index) {
    commit('DELETE_CATEGORY', index)
  },
  addCuadro({ commit }, indexCuadro, newCuadro) {
    commit('ADD_CUADRO', indexCuadro)
  },
  deleteCuadro({ commit }, index) {
    commit('DELETE_CUADRO', index)
  },
  duplicateCuadro({ commit }, indexCuadro, newCuadro) {
    commit('DUPLICATE_CUADRO', indexCuadro)
  }
}

export const getters = {
  getComick(state) {
    return state.comick
  }
}
