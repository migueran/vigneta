export const state = () => ({
  cuadro: []
})

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
    state.cuadro = cuadros
    /* eslint-disable-next-line no-console */
    console.log('state.cuadros')
    /* eslint-disable-next-line no-console */
    console.log(state)
  },
  UPDATE_CUADRO_1PROP(state, keyValue) {
    if (keyValue.type === 'style') {
      state.cuadro[keyValue.order].style[keyValue.key] = keyValue.value
    } else {
      state.cuadro[keyValue.order][keyValue.key] = keyValue.value
    }
  },
  ADD_CUADRO(state, dataObject) {
    state.cuadro.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  DELETE_CUADRO(state, index) {
    state.cuadro.splice(index, 1)
  },
  DUPLICATE_CUADRO(state, dataObject) {
    state.cuadro.splice(dataObject.indexCuadro, 0, dataObject.newCuadro)
  },
  UPDATE_ELEM_1PROP(state, keyValue) {
    if (keyValue.type !== undefined) {
      const string = state.cuadro[keyValue.order]
      string.elem[keyValue.index][keyValue.type][keyValue.key] = keyValue.value
    } else {
      state.cuadro[keyValue.order].elem[keyValue.index][keyValue.key] =
        keyValue.value
    }
  },
  DELETE_ELEM(state, order, index) {
    state.cuadro[order].elem.splice(index, 1)
  },
  DUPLICATE_ELEM(state, dataObject) {
    state.cuadro[dataObject.order].elem.splice(
      dataObject.index,
      0,
      dataObject.newElem
    )
  },
  ADD_STYLE(state, dataObject) {
    if (dataObject.index < 0) {
      state.cuadro[dataObject.order].style.push(dataObject.newStyle)
    } else {
      state.cuadro[dataObject.order].elem[dataObject.index].style.push(
        dataObject.newStyle
      )
    }
  },
  DEL_STYLE(state, dataObject) {
    if (dataObject.elem < 0) {
      state.cuadro[dataObject.order].style.splice(dataObject.indexStyle, 1)
    } else {
      const string = state.cuadro[dataObject.order]
      string.elem[dataObject.elem].style.splice(dataObject.indexStyle, 1)
    }
  }
}

export const getters = {
  getCuadrosLength() {
    /* eslint-disable-next-line no-console */
    console.log('state.cuadro')
    /* eslint-disable-next-line no-console */
    console.log(state.cuadro)
    return 0
  }
}
