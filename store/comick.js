import ComicksService from '~/api/ComicksService'

export const state = () => ({
  comick: {
    cuadros: []
  }
})

export const actions = {
  async setComick({ commit }, comickId) {
    const response = await ComicksService.getComick({
      id: comickId
    })
    commit('SET_COMICK', response.data)
  },
  updateComick1Prop({ commit }, keyValue) {
    commit('UPDATE_COMICK_1PROP', keyValue)
  },
  updateCuadro1Prop({ commit }, keyValue) {
    commit('UPDATE_CUADRO_1PROP', keyValue)
  },
  updateElem1Prop({ commit }, keyValue) {
    commit('UPDATE_ELEM_1PROP', keyValue)
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

export const mutations = {
  SET_COMICK(state, comick) {
    state.comick = comick
  },
  UPDATE_COMICK_1PROP(state, keyValue) {
    state.comick[keyValue.key] = keyValue.value
  },
  UPDATE_CUADRO_1PROP(state, keyValue) {
    state.comick.cuadros[keyValue.order][keyValue.key] = keyValue.value
  },
  UPDATE_ELEM_1PROP(state, keyValue) {
    state.comick.cuadros[keyValue.order].elem[keyValue.order][keyValue.key] =
      keyValue.value
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

export const getters = {}
