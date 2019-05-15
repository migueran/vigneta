<template>
  <div class="container">
    <headBar />
    <section class="section">
      <h1 class="title has-text-left">{{ titlePage }}</h1>
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
  },
  data() {
    return {
      titlePage: 'Profile'
    }
  }
}
</script>

<style lang="sass"></style>
