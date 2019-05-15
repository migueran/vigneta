<template>
  <main id="Cuadro" class="cuadro">
    <div v-for="(elem, index) in thisCuadro.elem" :key="index">
      <div
        :class="elem.typeElem"
        :style="'z-index:' + elem.zIndex + ';' + elem.style"
      >
        <span :style="elem.spanStyleToTxtBkg">
          <span class="content">{{ elem.txt }}</span>
          <img v-if="elem.typeElem != 'txt'" :src="getImage(elem.bkg)" />
        </span>
      </div>
    </div>
    <figure class="bkg"><img :src="getImage(thisCuadro.bkgCuadro)" /></figure>
  </main>
</template>

<script>
export default {
  name: 'CuadroPlay',
  props: [
    'thisCuadro',
    'thisCuadroIndex',
    'thisCuadroIndexDisplay',
    'thisComickId'
  ],
  methods: {
    getImage(image) {
      const urlImage = require('@/assets/' + image)
      return urlImage
    }
  }
}
</script>

<style lang="sass">
figure.bkg
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: auto
  z-index: 0
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
