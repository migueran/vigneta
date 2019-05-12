<template>
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-start">
      <a
        class="navbar-burger"
        role="button"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" title="home" to="/">
        VignietAap
      </nuxt-link>
    </div>
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Categories
        </a>
        <div class="navbar-dropdown">
          <nuxt-link
            v-for="(categoryLabel, index) in CategoryList"
            :key="index"
            class="navbar-item"
            :to="'/category/' + categoryLabel"
          >
            {{ categoryLabel }}
          </nuxt-link>
        </div>
      </div>
      <nuxt-link
        class="navbar-item has-text-white"
        title="Profile"
        to="/profile"
      >
        Profile
      </nuxt-link>
      <div class="navbar-item">
        <search />
      </div>
    </div>
    <div class="navbar-item">
      <signIn />
    </div>
  </nav>
</template>

<script>
import search from '~/components/headBar/Search'
import signIn from '~/components/headBar/SignIn'
import CategoryList from '~/api/CategoryService'

export default {
  name: 'HeadBar',
  components: {
    search,
    signIn
  },
  data() {
    return {
      CategoryList: []
    }
  },
  mounted() {
    this.CategoryList = CategoryList.category
  }
}
</script>

<style lang="sass"></style>
