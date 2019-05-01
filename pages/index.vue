<template>
  <section class="container">
    <div class="section">
      <headBar />
    </div>
    <comickList />
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ComickList from '@/components/ComickList'

export default {
  components: {
    HeadBar,
    ComickList
  }
}
</script>

<style lang="sass"></style>
