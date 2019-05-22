<template>
  <div class="container">
    <headBar />
    <section class="section">
      <cuadroPlay
        :this-cuadro="thisCuadro"
        :this-cuadro-index="cuadroIndex"
        :this-comick-id="comick._id"
      />
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import CuadroPlay from '~/components/cuadro/CuadroPlay'

export default {
  components: {
    HeadBar,
    CuadroPlay
  },
  data() {
    return {
      cuadroIndex: this.$route.params.order,
      cuadroIndexDisplay: parseInt(this.$route.params.order) + 1,
      thisCuadro: {}
    }
  },
  computed: {
    comick() {
      return this.$store.state.comick
    }
  },
  mounted() {
    this.getCuadro()
  },
  methods: {
    getCuadro() {
      if (sessionStorage.getItem(this.comick._id)) {
        this.comick = JSON.parse(sessionStorage.getItem(this.comick.id))
        this.thisCuadro = this.comick.cuadros[this.cuadroIndex]
      } else {
        this.$router.push({ name: '404' })
      }
    }
  }
}
</script>

<style lang="sass"></style>
