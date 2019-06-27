<template>
  <div class="container">
    <headBar />
    <nuxt-link
      :to="nextPrevUrl(-1)"
      class="icon is-large has-text-grey"
      title="prev"
    >
      <i class="fas fa-5x fa-chevron-left" />
    </nuxt-link>
    <section class="section">
      <cuadroPlay :this-cuadro-index="cuadroIndex" :assets="assets" />
      <cuadroCRUD v-if="edit" :this-cuadro-index="cuadroIndex" />
    </section>
    <nuxt-link
      :to="nextPrevUrl(1)"
      class="icon is-large has-text-grey"
      title="next"
    >
      <i class="fas fa-5x fa-chevron-right" />
    </nuxt-link>
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
      cuadroIndex: parseInt(this.$route.params.order),
      cuadroIndexDisplay: this.$route.params.order + 1
    }
  },
  computed: {
    ...mapState({
      comickId: state => state.comick._id,
      cuadroIndexMax: function(state) {
        return state.cuadros.cuadros.length
      },
      thisCuadro: function(state) {
        return state.cuadros.cuadros[this.cuadroIndex]
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
    nextPrevUrl(value) {
      const actions = this.$route.params.play
      let indexURL = ''
      if (
        this.cuadroIndex + value < 0 ||
        this.cuadroIndex + value === this.cuadroIndexMax
      ) {
        indexURL = this.cuadroIndex
      } else {
        indexURL = this.cuadroIndex + value
      }
      const toUrl = '/comicks/' + this.comickId + '/' + indexURL + '/' + actions
      return toUrl
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
