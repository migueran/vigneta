import Api from '~/api/Api'

export default {
  fetchComicks() {
    return Api().get('comicks')
  },

  fetchComickPerCategory(params) {
    return Api().get('comicks/category/' + params)
  },

  addComick(params) {
    return Api().post('add_comick', params)
  },

  updateComickInBD(params) {
    if (sessionStorage.getItem(params)) {
      const comick = JSON.parse(sessionStorage.getItem(params))
      return Api().put('comicks/' + params, comick)
    } else {
      /* eslint-disable no-console */
      console.log('no existe en local host el comick' + params)
      /* eslint-enable no-console */
    }
  },

  getComick(params) {
    return Api().get('comicks/' + params.id)
  },

  deleteComick(id) {
    return Api().delete('comicks/' + id)
  }
}
