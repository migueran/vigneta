<template>
  <main id="Cuadro" class="cuadro">
    <div
      v-for="(elem, index) in thisCuadro.elem"
      :key="index"
      style="position: absolute; width: 100%; height: 100%"
    >
      <div
        :class="elem.typeElem"
        :style="'z-index:' + elem.zIndex + ';' + elem.style"
      >
        <span>
          <span class="content" :style="elem.spanStyleToTxtBkg">
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
export default {
  name: 'CuadroPlay',
  props: {
    thisCuadro: {
      type: Object,
      default: function() {
        return {
          elem:
            '{"elem":[{"transition":{"enter":null,"leave":null},"zIndex":1,"_id":"5c45e02756ba760c1a26b192","typeElem":"txt":"texto","style":"",}],"_id":"5c45e02756ba760c1a26b193","bkgCuadro":""}'
        }
      }
    },
    thisCuadroIndex: {
      type: Number,
      default: 0
    },
    thisComickId: {
      type: Number,
      default: 0
    },
    assets: {
      type: String,
      default: ''
    }
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
