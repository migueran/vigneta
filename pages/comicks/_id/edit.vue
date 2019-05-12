<template>
  <section class="container">
    <div class="section">
      <headBar />
      <comickEdit :comick="Comick" />
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control buttons is-right">
              <nuxt-link :to="'/profile'" class="button is-text" title="Cancel">
                cancel
              </nuxt-link>
              <button
                v-if="Comick.cuadros.length < 1"
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
      <cuadroList
        :comick-titulo="Comick.title"
        :comick-cuadros="Comick.cuadros"
      />
    </div>
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ComickEdit from '~/components/comick/ComickEdit'
import CuadroList from '~/components/cuadro/CuadroList'
import ComicksService from '~/api/ComicksService'

export default {
  components: {
    HeadBar,
    ComickEdit,
    CuadroList
  },
  data() {
    return {
      Comick: {
        cuadros: {}
      }
    }
  },
  mounted() {
    this.getComick()
  },
  methods: {
    async getComick() {
      const response = await ComicksService.getComick({
        id: this.$route.params.id
      })
      this.Comick = response.data
      ComicksService.saveComickInSessionStorage(this.Comick)
    },
    async updateComick() {
      ComicksService.saveComickInSessionStorage(this.Comick)
      await ComicksService.updateComickInBD(this.$route.params.id)
    },
    async addCuadro() {}
  }
}
</script>

<style lang="sass"></style>
