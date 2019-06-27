export const state = () => ({})

export const actions = {
  setCuadros({ commit }, cuadros) {
    commit('SET_CUADROS', cuadros)
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
  SET_CUADROS(state, cuadros) {
    state.cuadros = cuadros
    /* eslint-disable-next-line no-console */
    console.log('state.cuadros')
    /* eslint-disable-next-line no-console */
    console.log(state)
  },
  UPDATE_CUADRO_1PROP(state, keyValue) {
    if (keyValue.type === 'style') {
      state[keyValue.order].style[keyValue.key] = keyValue.value
    } else {
      state[keyValue.order][keyValue.key] = keyValue.value
    }
  },
  ADD_CUADRO(state, dataObject) {
    state.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  DELETE_CUADRO(state, index) {
    state.splice(index, 1)
  },
  DUPLICATE_CUADRO(state, dataObject) {
    state.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  UPDATE_ELEM_1PROP(state, keyValue) {
    if (keyValue.type !== undefined) {
      const string = state[keyValue.order]
      string.elem[keyValue.index][keyValue.type][keyValue.key] = keyValue.value
    } else {
      state[keyValue.order].elem[keyValue.index][keyValue.key] = keyValue.value
    }
  },
  DELETE_ELEM(state, order, index) {
    state[order].elem.splice(index, 1)
  },
  DUPLICATE_ELEM(state, dataObject) {
    state[dataObject.order].elem.splice(dataObject.index, 0, dataObject.newElem)
  },
  ADD_STYLE(state, dataObject) {
    if (dataObject.index < 0) {
      state[dataObject.order].style.push(dataObject.newStyle)
    } else {
      state[dataObject.order].elem[dataObject.index].style.push(
        dataObject.newStyle
      )
    }
  },
  DEL_STYLE(state, dataObject) {
    if (dataObject.elem < 0) {
      state[dataObject.order].style.splice(dataObject.indexStyle, 1)
    } else {
      const string = state[dataObject.order]
      string.elem[dataObject.elem].style.splice(dataObject.indexStyle, 1)
    }
  }
}

export const getters = {
  getCuadrosLength() {
    return state.cuadros
  }
}
