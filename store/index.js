import ComicksService from '~/api/ComicksService'

export const state = () => ({})

export const actions = {
  async initComick({ dispatch }, comickId) {
    const response = await ComicksService.getComick({
      id: comickId
    })
    dispatch('comick/setComick', response.data, { root: true })
    dispatch('cuadros/setCuadros', response.data.cuadros, { root: true })
  }
}

export const getters = {}
