<template>
  <main id="Cuadro" class="cuadro" :style="thisCuadro.style | jsonToCss()">
    <div
      v-for="(elem, index) in thisCuadro.elem"
      :key="index"
      style="position: absolute; width: 100%; height: 100%"
    >
      <div :class="elem.typeElem" :style="elem.style | jsonToCss(elem.zIndex)">
        <span>
          <span
            class="content"
            :style="
              'padding: ' +
                elem.spanStyleToTxtBkg.top +
                'px ' +
                elem.spanStyleToTxtBkg.right +
                '% ' +
                elem.spanStyleToTxtBkg.bottom +
                'px ' +
                elem.spanStyleToTxtBkg.left +
                '%'
            "
          >
            {{ elem.txt }}
          </span>
          <img v-if="elem.typeElem != 'txt'" :src="getImgUrl(elem.bkg)" />
        </span>
      </div>
    </div>
    <figure class="bkg">
      <img :src="getImgUrl(thisCuadro.bkgCuadro)" />
    </figure>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CuadroPlay',
  filters: {
    jsonToCss(json, zIndex) {
      let cssFromJson = ''
      if (zIndex !== undefined) {
        cssFromJson = 'z-index:' + zIndex + '; '
      }
      for (let j = 0; j < json.length; j++) {
        if (json[j].tag !== undefined) {
          cssFromJson +=
            json[j].tag + ': ' + json[j].value + json[j].unity + '; '
        }
      }
      return cssFromJson
    }
  },
  props: {
    thisCuadroIndex: {
      type: Number,
      default: () => parseInt(this.$route.params.order)
    },
    assets: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      thisCuadro: function(state) {
        return state.comick.cuadros[this.thisCuadroIndex]
      }
    })
  },
  methods: {
    getImgUrl(value) {
      return this.assets + value
    }
  }
}
</script>

<style lang="sass">
.cuadro
  position: relative
  background-color: #eaeaea
  box-shadow: 3px 3px 15px #000
  border: #eaeaea solid 15px
figure.bkg
  top: 0
  left: 0
  width: 100%
  height: auto
.cuadro
  opacity: 1
  max-height: 5000px
  overflow: visible
.txt
  position: absolute
  background-color: #fff
  border: 1px solid #000
  border-radius: 50%
  padding: 9px 25px
  text-align: center
.txt-bkg
  position: absolute
  background-repeat: no-repeat
  span.content
    position: absolute
    width: 100%
    top: 0
    left: 0
.txt, .txt-bkg
  font-size: 1rem
  font-style: italic
  font-variant: small-caps
  color: #666
  font-family: 'Fresca', sans-serif
  white-space: normal
  line-height: .9
.character img, .txt-bkg img
  width: 100%
  height: auto
</style>
