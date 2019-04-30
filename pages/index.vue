<template>
  <section class="container">
    <div>
      <HeadBar />
      <h1 class="title">
        vigneta
      </h1>
      <h2 class="subtitle">
        a comick app
      </h2>
    </div>
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar'

export default {
  components: {
    HeadBar
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
