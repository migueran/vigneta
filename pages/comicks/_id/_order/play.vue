<template>
  <div class="container">
    <headBar />
    <section class="section">
      <cuadroPlay
        :this-cuadro="thisCuadro"
        :this-cuadro-index="cuadroIndex"
        :this-comick-id="comickId"
      />
      {{ thisCuadro }}
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import CuadroPlay from '~/components/cuadro/CuadroPlay'
import { mapState } from 'vuex'

export default {
  components: {
    HeadBar,
    CuadroPlay
  },
  data() {
    return {
      cuadroIndex: this.$route.params.order,
      cuadroIndexDisplay: parseInt(this.$route.params.order) + 1
    }
  },
  computed: {
    ...mapState({
      comickId: state => state.comick.comick.id,
      thisCuadro: function(state) {
        return state.comick.comick.cuadros[this.cuadroIndex]
      }
    })
  },
  methods: {
    getCuadro() {}
  }
}
</script>

<style lang="sass"></style>
