<template>
  <div>
    <h2 class="subtitle has-text-left is-primary">
      Cuadros in comick: <strong>{{ comickTitulo }}</strong>
    </h2>
    <table id="cuadroList" class="table has-background-black is-fullwidth">
      <thead>
        <tr>
          <th>order</th>
          <th>elems</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cuadro, index) in comickCuadros" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ cuadro.elem | toLength }}</td>
          <td class="has-text-right text-is-nowrap">
            <nuxt-link
              :to="index + '/edit'"
              class="button is-primary is-outlined is-small"
              title="Edit Cuadro"
            >
              <i class="far fa-edit"></i>
            </nuxt-link>
            <a
              class="button is-primary is-outlined is-small"
              title="Delete cuadro"
              @click="deleteCuadro(index)"
            >
              <i class="far fa-trash-alt"></i>
            </a>
            <a
              class="button is-primary is-outlined is-small"
              title="Duplicate cuadro"
              @click="duplicateCuadro(index, cuadro)"
            >
              <i class="far fa-clone"></i>
            </a>
            <nuxt-link
              :to="index + '/play'"
              class="button is-primary is-outlined is-small"
              title="show cuadro"
            >
              <i class="far fa-play-circle"></i>
            </nuxt-link>
            <a
              class="button is-primary is-outlined is-small"
              title="add cuadro after"
              @click="addCuadro(index)"
            >
              <i class="fa fa-plus"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CuadroService from '~/api/CuadroService'

export default {
  name: 'CuadroList',
  filters: {
    toLength(value) {
      if (value !== undefined) {
        return value.length
      } else {
        return '?'
      }
    }
  },
  props: {
    comickTitulo: {
      type: String,
      default: 'value'
    },
    comickCuadros: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    }
  },
  methods: {
    async addCuadro(indexCuadro) {
      indexCuadro += 1
      const newCuadro = {
        bkgCuadro: '',
        elem: {
          zIndex: 1,
          typeElem: '',
          contentToTxtTxtBkgOrBkg: '',
          txt: '',
          bkg: '',
          transition: {
            enter: '',
            leave: ''
          },
          style: '',
          spanStyleToTxtBkg: ''
        }
      }
      this.comickCuadros.splice(indexCuadro, 0, newCuadro)
      await CuadroService.addCuadroToComickPerID({
        id: this.$route.params.id,
        newCuadro: newCuadro
      })
    },
    async deleteCuadro(index) {
      this.comickCuadros.splice(index, 1)
      await CuadroService.delCuadroToComickPerID({
        id: this.$route.params.id,
        cuadroIndex: index
      })
    },
    async duplicateCuadro(indexCuadro, newCuadro) {
      indexCuadro += 1
      this.comickCuadros.splice(indexCuadro, 0, newCuadro)
      await CuadroService.addCuadroToComickPerID({
        id: this.$route.params.id,
        newCuadro: newCuadro
      })
    }
  }
}
</script>

<style lang="sass"></style>
