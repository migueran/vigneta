<template>
  <div class="container">
    <headBar />
    <section class="section">
      <profileCRUD />
      <comickList />
    </section>
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ProfileCRUD from '~/components/Profile/ProfileCRUD'
import ComickList from '~/components/ComickList'

export default {
  components: {
    HeadBar,
    ProfileCRUD,
    ComickList
  }
}
</script>

<style lang="sass"></style>
