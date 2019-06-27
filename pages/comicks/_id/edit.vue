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
                v-if="Comick.cuadros.length"
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
import { mapState } from 'vuex'

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
      state() {
        return this.$store.state
      }
    })
  },
  mounted() {
    this.getComick()
  },
  methods: {
    getComick() {
      this.$store.dispatch('comick/setComick', this.$route.params.id)
    },
    async updateComick() {
      await ComicksService.updateComickInBD(this.Comick)
    },
    async addCuadro() {}
  }
}
</script>

<style lang="sass"></style>
