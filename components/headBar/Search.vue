<template>
  <div id="search" class="field">
    <p class="control has-icons-left">
      <input class="input" type="text" :placeholder="title" />
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      title: 'Search'
    }
  }
}
</script>

<style></style>
