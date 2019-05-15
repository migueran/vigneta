<template>
  <div class="container">
    <headBar />
    <section class="section">
      <cuadroPlay
        :this-Cuadro="thisCuadro"
        :this-Cuadro-Index="cuadroIndex"
        :this-Cuadro-Index-Display="cuadroIndexDisplay"
        :this-Comick-Id="comick._id"
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
      cuadroIndex: '',
      cuadroIndexDisplay: '',
      thisCuadro: {},
      comick: {
        cuadros: []
      }
    }
  }
}
</script>

<style lang="sass"></style>
