<template>
  <section class="container">
    <div class="section">
      <headBar />
    </div>
    <cuadroCRUD />
    <cuadroList />
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import CuadroCRUD from '~/components/cuadro/CuadroCRUD'
import CuadroList from '~/components/cuadro/CuadroList'

export default {
  components: {
    HeadBar,
    CuadroCRUD,
    CuadroList
  }
}
</script>

<style lang="sass"></style>
