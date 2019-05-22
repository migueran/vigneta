<template>
  <div class="container">
    <headBar />
    <section class="section">
      <cuadroCRUD />
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import CuadroCRUD from '~/components/cuadro/CuadroCRUD'

export default {
  components: {
    HeadBar,
    CuadroCRUD
  }
}
</script>

<style lang="sass"></style>
