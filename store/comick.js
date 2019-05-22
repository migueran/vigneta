export const state = () => ({
  category: [],
  cuadros: []
})

export const mutations = {
  set(state, comick) {
    state = comick
    alert(state.title)
  }
}
