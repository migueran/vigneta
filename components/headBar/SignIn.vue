<template>
  <div class="field is-horizontal">
    <div v-if="!userLogin" class="field-body">
      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            name="password"
            placeholder="your Password"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button
            class="button is-primary is-inverted is-outlined"
            title="Sign In"
            @click="toSignIn"
          >
            <i class="fas fa-sign-in-alt"></i>
          </button>
        </p>
      </div>
      <p class="level-left has-text-white">|&nbsp;&nbsp;&nbsp;</p>
      <div class="field">
        <p class="control">
          <nuxt-link class="button is-dark" title="Sign up" to="/">
            Sign Up
          </nuxt-link>
        </p>
      </div>
    </div>
    <div v-if="userLogin" class="field-body">
      <p class="level-left has-text-white">
        Welcome, Usuario&nbsp;&nbsp;&nbsp;
      </p>
      <div class="field">
        <p class="control">
          <button class="button is-dark" @click="toSignOut">Sign Out</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      userLogin: true
    }
  },
  methods: {
    toSignIn() {
      this.userLogin = true
    },
    toSignOut() {
      this.userLogin = false
    }
  }
}
</script>

<style lang="sass"></style>
