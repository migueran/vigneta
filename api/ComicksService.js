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
    return Api().put('comicks/' + params._id, params)
  },

  getComick(params) {
    return Api().get('comicks/' + params.id)
  },

  deleteComick(id) {
    return Api().delete('comicks/' + id)
  }
}
