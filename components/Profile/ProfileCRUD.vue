<template>
  <div class="hero">
    <div class="hero-body box has-background-black-ter has-text-grey-light">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="user user.displayName"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h3 class="has-text-primary">user.displayName</h3>
            <div class="columns">
              <div class="column is-one-third">
                <p>mail: user.email</p>
              </div>
              <div class="column">
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control has-icons-right">
                        <input
                          class="input"
                          :disabled="!activeForm"
                          :class="{ 'has-background-dark': !activeForm }"
                          type="text"
                          name="firstName"
                        />
                        <span class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-right">
                        <input
                          class="input"
                          :disabled="!activeForm"
                          :class="{ 'has-background-dark': !activeForm }"
                          type="text"
                          name="lastName"
                        />
                        <span class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third"></div>
              <div class="column is-one-third">
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input"
                      :disabled="!activeForm"
                      :class="{ 'has-background-dark': !activeForm }"
                      type="text"
                      name="birthdayDate"
                    />
                    <span class="icon is-small is-right">
                      <i class="fas fa-check" />
                    </span>
                  </p>
                </div>
              </div>
              <div class="column">
                <p></p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third"></div>
              <div class="column is-one-third">
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input"
                      :disabled="!activeForm"
                      :class="{ 'has-background-dark': !activeForm }"
                      type="text"
                      name="country"
                    />
                    <span class="icon is-small is-right">
                      <i class="fas fa-check" />
                    </span>
                  </p>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input"
                      :disabled="!activeForm"
                      :class="{ 'has-background-dark': !activeForm }"
                      type="text"
                      name="city"
                    />
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <h3 class="has-text-primary">
                  Redes:
                </h3>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <p>Red1:</p>
              </div>
              <div class="column is-one-third">
                <p>Red2:</p>
              </div>
              <div class="column is-one-third">
                <p>Red3:</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <div class="control buttons is-right">
                        <button
                          class="button is-text has-text-white"
                          :class="{
                            'has-background-white has-text-dark': !activeForm
                          }"
                          title="edit profile"
                          @click="cancelModifiedProfile"
                        >
                          <span v-if="!activeForm">
                            Active
                          </span>
                          <span v-else>
                            Cancel
                          </span>
                        </button>
                        <button
                          class="button is-primary"
                          :disabled="!activeForm"
                          title="Update Profile"
                          @click="ModifiedProfile"
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCRUD',
  data() {
    return {
      activeForm: false
    }
  },
  methods: {
    cancelModifiedProfile() {
      this.activeForm = !this.activeForm
    },
    ModifiedProfile() {}
  }
}
</script>

<style lang="sass"></style>
