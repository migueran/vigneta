<template>
  <div class="container">
    <section class="section">
      <headBar />
    </section>
    <section class="section">
      <comickList />
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ComickList from '~/components/ComickList'

export default {
  components: {
    HeadBar,
    ComickList
  }
}
</script>

<style lang="sass"></style>
