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
  setComick({ commit }, comick) {
    commit('SET_COMICK', comick)
  },
  updateComick1Prop({ commit }, keyValue) {
    commit('UPDATE_COMICK_1PROP', keyValue)
  },
  addCategory({ commit }, newCategory) {
    commit('ADD_CATEGORY', newCategory)
  },
  deleteCategory({ commit }, index) {
    commit('DELETE_CATEGORY', index)
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
  },
  UPDATE_COMICK_1PROP(state, keyValue) {
    state[keyValue.key] = keyValue.value
  },
  ADD_CATEGORY(state, newCategory) {
    state.category.push(newCategory)
  },
  DELETE_CATEGORY(state, index) {
    state.category.splice(index, 1)
  }
}

export const getters = {
  getTitle(state) {
    return state.title
  }
}
