<template>
  <div class="container">
    <headBar />
    <section class="section">
      <cuadroPlay :this-cuadro-index="cuadroIndex" :assets="assets" />
      <cuadroCRUD v-if="edit" :this-cuadro-index="cuadroIndex" />
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import CuadroPlay from '~/components/cuadro/CuadroPlay'
import CuadroCRUD from '~/components/cuadro/CuadroCRUD'
import { mapState } from 'vuex'

export default {
  components: {
    HeadBar,
    CuadroPlay,
    CuadroCRUD
  },
  validate({ params }) {
    return params.play === 'play' || params.play === 'edit'
  },
  data() {
    return {
      edit: false,
      assets: 'http://localhost:8081/assets/',
      cuadroIndex: this.$route.params.order,
      cuadroIndexDisplay: parseInt(this.$route.params.order) + 1
    }
  },
  computed: {
    ...mapState({
      comickId: state => state.comick.comick._id,
      thisCuadro: function(state) {
        return state.comick.comick.cuadros[this.cuadroIndex]
      }
    })
  },
  mounted() {
    this.getCuadro()
    this.setEdit()
  },
  methods: {
    getCuadro() {
      if (this.comickId === undefined) {
        alert('no anda')
      }
    },
    setEdit() {
      if (this.$route.params.play === 'edit') {
        this.edit = true
      }
    }
  }
}
</script>

<style lang="sass"></style>
