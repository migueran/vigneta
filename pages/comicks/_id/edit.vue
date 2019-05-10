<template>
  <section class="container">
    <div class="section">
      <headBar />
      <comickEdit :comick="Comick" />
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
      Comick: {}
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
    }
  }
}
</script>

<style lang="sass"></style>
