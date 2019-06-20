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
  addCategory({ commit }, newCategory) {
    commit('ADD_CATEGORY', newCategory)
  },
  deleteCategory({ commit }, index) {
    commit('DELETE_CATEGORY', index)
  },
  updateCuadro1Prop({ commit }, keyValue) {
    commit('UPDATE_CUADRO_1PROP', keyValue)
  },
  addCuadro({ commit }, dataObject) {
    commit('ADD_CUADRO', dataObject)
  },
  deleteCuadro({ commit }, index) {
    commit('DELETE_CUADRO', index)
  },
  duplicateCuadro({ commit }, dataObject) {
    commit('DUPLICATE_CUADRO', dataObject)
  },
  updateElem1Prop({ commit }, keyValue) {
    commit('UPDATE_ELEM_1PROP', keyValue)
  },
  deleteElem({ commit }, index) {
    commit('DELETE_ELEM', index)
  },
  duplicateElem({ commit }, dataObject) {
    commit('DUPLICATE_ELEM', dataObject)
  },
  addStyle({ commit }, dataObject) {
    commit('ADD_STYLE', dataObject)
  },
  delStyle({ commit }, dataObject) {
    commit('DEL_STYLE', dataObject)
  }
}

export const mutations = {
  SET_COMICK(state, comick) {
    state.comick = comick
  },
  UPDATE_COMICK_1PROP(state, keyValue) {
    state.comick[keyValue.key] = keyValue.value
  },
  ADD_CATEGORY(state, newCategory) {
    state.comick.category.push(newCategory)
  },
  DELETE_CATEGORY(state, index) {
    state.comick.category.splice(index, 1)
  },
  UPDATE_CUADRO_1PROP(state, keyValue) {
    if (keyValue.type === 'style') {
      state.comick.cuadros[keyValue.order].style[keyValue.key] = keyValue.value
    } else {
      state.comick.cuadros[keyValue.order][keyValue.key] = keyValue.value
    }
  },
  ADD_CUADRO(state, dataObject) {
    state.comick.cuadros.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  DELETE_CUADRO(state, index) {
    state.comick.cuadros.splice(index, 1)
  },
  DUPLICATE_CUADRO(state, dataObject) {
    state.comick.cuadros.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  UPDATE_ELEM_1PROP(state, keyValue) {
    if (keyValue.type !== undefined) {
      const string = state.comick.cuadros[keyValue.order]
      string.elem[keyValue.index][keyValue.type][keyValue.key] = keyValue.value
    } else {
      state.comick.cuadros[keyValue.order].elem[keyValue.index][keyValue.key] =
        keyValue.value
    }
  },
  DELETE_ELEM(state, order, index) {
    state.comick.cuadros[order].elem.splice(index, 1)
  },
  DUPLICATE_ELEM(state, dataObject) {
    state.comick.cuadros[dataObject.order].elem.splice(
      dataObject.index,
      0,
      dataObject.newElem
    )
  },
  ADD_STYLE(state, dataObject) {
    if (dataObject.index < 0) {
      state.comick.cuadros[dataObject.order].style.push(dataObject.newStyle)
    } else {
      state.comick.cuadros[dataObject.order].elem[dataObject.index].style.push(
        dataObject.newStyle
      )
    }
  },
  DEL_STYLE(state, dataObject) {
    if (dataObject.elem < 0) {
      state.comick.cuadros[dataObject.order].style.splice(
        dataObject.indexStyle,
        1
      )
    } else {
      const string = state.comick.cuadros[dataObject.order]
      string.elem[dataObject.elem].style.splice(dataObject.indexStyle, 1)
    }
  }
}

export const getters = {}
