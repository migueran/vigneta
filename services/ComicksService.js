import Api from '~/services/Api'

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
      alert('no existe en local host el comick' + params)
    }
  },

  getComick(params) {
    return Api().get('comicks/' + params.id)
  },

  saveComickInSessionStorage(comick) {
    const thisComickId = comick._id
    sessionStorage.setItem(thisComickId, JSON.stringify(comick))
  },

  deleteComick(id) {
    return Api().delete('comicks/' + id)
  },

  addCuadroToComickPerID(params) {
    if (sessionStorage.getItem(params.id)) {
      const comick = JSON.parse(sessionStorage.getItem(params.id))
      comick.cuadros.push(params.newCuadro)
      sessionStorage.setItem(params.id, JSON.stringify(comick))
      this.updateComickInBD(params.id)
    } else {
      alert('no existe en local host el comick' + params.id)
    }
  },

  delCuadroToComickPerID(params) {
    if (sessionStorage.getItem(params.id)) {
      const comick = JSON.parse(sessionStorage.getItem(params.id))
      comick.cuadros.splice(params.cuadroIndex, 1)
      sessionStorage.setItem(params.id, JSON.stringify(comick))
      this.updateComickInBD(params.id)
    } else {
      alert('no existe en local host el comick' + params.id)
    }
  },

  editCuadro(thisComickId, indexThisCuadro, thisCuadroBkg) {
    if (sessionStorage.getItem(thisComickId)) {
      const comick = JSON.parse(sessionStorage.getItem(thisComickId))
      comick.cuadros[indexThisCuadro].bkgCuadro = thisCuadroBkg
      sessionStorage.setItem(thisComickId, JSON.stringify(comick))
    } else {
      alert('no existe en local host el comick' + thisComickId)
    }
  },

  editElement(thisComickId, indexThisCuadro, thisElemIndex, elemEdited) {
    if (sessionStorage.getItem(thisComickId)) {
      const comick = JSON.parse(sessionStorage.getItem(thisComickId))
      comick.cuadros[indexThisCuadro].elem[thisElemIndex] = elemEdited
      sessionStorage.setItem(thisComickId, JSON.stringify(comick))
    } else {
      alert('no existe en local host el comick' + thisComickId)
    }
  },

  delElement(thisComickId, indexThisCuadro, thisElemIndex) {
    if (sessionStorage.getItem(thisComickId)) {
      const comick = JSON.parse(sessionStorage.getItem(thisComickId))
      comick.cuadros[indexThisCuadro].elem.splice(thisElemIndex, 1)
      sessionStorage.setItem(thisComickId, JSON.stringify(comick))
    } else {
      alert('no existe en local host el comick' + thisComickId)
    }
  },

  duplicateElement(thisComickId, indexThisCuadro, thisElemIndex, elemToAdd) {
    if (sessionStorage.getItem(thisComickId)) {
      elemToAdd.zIndex = thisElemIndex + 2
      const comick = JSON.parse(sessionStorage.getItem(thisComickId))
      comick.cuadros[indexThisCuadro].elem.splice(thisElemIndex, 0, elemToAdd)
      sessionStorage.setItem(thisComickId, JSON.stringify(comick))
    } else {
      alert('no existe en local host el comick' + thisComickId)
    }
  }
}
