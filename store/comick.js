import ComicksService from '~/api/ComicksService'

export const state = () => ({
  authorDisplayName: '',
  author_id: '',
  category: [],
  createdTo: '',
  description: '',
  draft: '',
  title: '',
  _id: ''
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
    state.authorDisplayName = comick.authorDisplayName
    state.author_id = comick.author_id
    state.category = comick.category
    state.createdTo = comick.createdTo
    state.description = comick.description
    state.draft = comick.draft
    state.title = comick.title
    state._id = comick._id
    state.cuadros = comick.cuadros
  },
  UPDATE_COMICK_1PROP(state, keyValue) {
    state[keyValue.key] = keyValue.value
  },
  ADD_CATEGORY(state, newCategory) {
    state.category.push(newCategory)
  },
  DELETE_CATEGORY(state, index) {
    state.category.splice(index, 1)
  },
  UPDATE_CUADRO_1PROP(state, keyValue) {
    if (keyValue.type === 'style') {
      state.cuadros[keyValue.order].style[keyValue.key] = keyValue.value
    } else {
      state.cuadros[keyValue.order][keyValue.key] = keyValue.value
    }
  },
  ADD_CUADRO(state, dataObject) {
    state.cuadros.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  DELETE_CUADRO(state, index) {
    state.cuadros.splice(index, 1)
  },
  DUPLICATE_CUADRO(state, dataObject) {
    state.cuadros.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  UPDATE_ELEM_1PROP(state, keyValue) {
    if (keyValue.type !== undefined) {
      const string = state.cuadros[keyValue.order]
      string.elem[keyValue.index][keyValue.type][keyValue.key] = keyValue.value
    } else {
      state.cuadros[keyValue.order].elem[keyValue.index][keyValue.key] =
        keyValue.value
    }
  },
  DELETE_ELEM(state, order, index) {
    state.cuadros[order].elem.splice(index, 1)
  },
  DUPLICATE_ELEM(state, dataObject) {
    state.cuadros[dataObject.order].elem.splice(
      dataObject.index,
      0,
      dataObject.newElem
    )
  },
  ADD_STYLE(state, dataObject) {
    if (dataObject.index < 0) {
      state.cuadros[dataObject.order].style.push(dataObject.newStyle)
    } else {
      state.cuadros[dataObject.order].elem[dataObject.index].style.push(
        dataObject.newStyle
      )
    }
  },
  DEL_STYLE(state, dataObject) {
    if (dataObject.elem < 0) {
      state.cuadros[dataObject.order].style.splice(dataObject.indexStyle, 1)
    } else {
      const string = state.cuadros[dataObject.order]
      string.elem[dataObject.elem].style.splice(dataObject.indexStyle, 1)
    }
  }
}

export const getters = {
  getTitle(state) {
    return state.title
  }
}
