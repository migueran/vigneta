<template>
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand navbar-start">
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
    <a href="/" class="navbar-item">Vinietaap</a>
    <div class="navbar-item">
      <search />
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <signIn />
      </div>
      <div class="navbar-item">
        <signOut />
      </div>
    </div>
  </nav>
</template>

<script>
import search from '~/components/headBar/Search'
import signIn from '~/components/headBar/SignIn'
import signOut from '~/components/headBar/SignOut'

export default {
  name: 'HeadBar',
  components: {
    search,
    signIn,
    signOut
  }
}
</script>

<style></style>
