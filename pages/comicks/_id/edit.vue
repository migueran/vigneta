<template>
  <div class="container">
    <headBar />
    <div class="section">
      <comickEdit />
      <hr />
      <cuadroList />
      <hr />
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control buttons is-right">
              <nuxt-link :to="'/profile'" class="button is-text" title="Cancel">
                cancel
              </nuxt-link>
              <button
                v-if="cuadroIndexMax < 1"
                class="button is-text"
                title="Add Cuadro"
                @click="addCuadro()"
              >
                Add Cuadro
              </button>
              <button
                class="button is-primary"
                title="Update Comick"
                @click="updateComick()"
              >
                Update Comick
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ComickEdit from '~/components/comick/ComickEdit'
import CuadroList from '~/components/cuadro/CuadroList'
import ComicksService from '~/api/ComicksService'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    HeadBar,
    ComickEdit,
    CuadroList
  },
  computed: {
    ...mapState({
      Comick() {
        return this.$store.state.comick
      },
      Cuadros() {
        return this.$store.state.cuadros.cuadro
      },
      cuadroIndexMax: function(state) {
        return state.cuadros.cuadro.length
      },
      ...mapGetters({
        cuadrosLength: 'cuadros/getCuadrosLength',
        comick_id: 'comick/getId'
      })
    })
  },
  mounted() {
    this.getComick()
  },
  methods: {
    getComick() {
      const newId = this.$route.params.id
      if (newId !== this.comick_id) {
        this.$store.dispatch('initComick', newId)
      }
    },
    async updateComick() {
      const ComickToBD = this.Comick
      ComickToBD.cuadros = this.Cuadros
      await ComicksService.updateComickInBD(ComickToBD)
    },
    async addCuadro() {}
  }
}
</script>

<style lang="sass"></style>
