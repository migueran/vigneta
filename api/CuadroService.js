import ComicksService from '~/api/ComicksService'

export default {
  addCuadroToComickPerID(params) {
    if (sessionStorage.getItem(params.id)) {
      const comick = JSON.parse(sessionStorage.getItem(params.id))
      comick.cuadros.push(params.newCuadro)
      sessionStorage.setItem(params.id, JSON.stringify(comick))
      ComicksService.updateComickInBD(params.id)
    } else {
      alert('no existe en local host el comick' + params.id)
    }
  },

  delCuadroToComickPerID(params) {
    if (sessionStorage.getItem(params.id)) {
      const comick = JSON.parse(sessionStorage.getItem(params.id))
      comick.cuadros.splice(params.cuadroIndex, 1)
      sessionStorage.setItem(params.id, JSON.stringify(comick))
      ComicksService.updateComickInBD(params.id)
    } else {
      alert('no existe en local host el comick' + params.id)
    }
  },

  editCuadro() {
    alert('editCuadro')
  }
}
