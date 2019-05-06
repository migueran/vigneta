<template>
  <section class="container">
    <div class="section">
      <headBar />
    </div>
    <profileCRUD />
    <comickList />
  </section>
</template>

<script>
import HeadBar from '~/components/HeadBar'
import ProfileCRUD from '~/components/Profile/ProfileCRUD'
import ComickList from '@/components/ComickList'

export default {
  components: {
    HeadBar,
    ProfileCRUD,
    ComickList
  }
}
</script>

<style lang="sass"></style>
