<template>
  <section class="section">
    <div class="container">
      <table id="comickList" class="table has-background-black is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Length</th>
            <th>Author</th>
            <th>Created</th>
            <th class="has-text-centered">
              <i class="fab fa-firstdraft disabled" title="Draft"></i>
              /
              <i class="fa fa-file has-text-primary" title="Final"></i>
            </th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>comick.title</td>
            <td>comick.description</td>
            <td></td>
            <td class="has-text-right">comick.cuadros.length</td>
            <td>comick.authorDisplayName</td>
            <td>comick.CreatedTo | dateFormat</td>
            <td class="has-text-centered">
              <i class="fab fa-firstdraft disabled" title="Draft"></i>
              <i class="fa fa-file has-text-primary" title="Final"></i>
            </td>
            <td class="has-text-centered">
              <nuxt-link to="/" class="button is-primary is-outlined is-small">
                <i class="far fa-edit"></i>
              </nuxt-link>
              <nuxt-link to="/" class="button is-primary is-outlined is-small">
                <i class="far fa-trash-alt"></i>
              </nuxt-link>
              <nuxt-link to="/" class="button is-primary is-outlined is-small">
                <i class="far fa-clone"></i>
              </nuxt-link>
              <nuxt-link to="/" class="button is-primary is-outlined is-small">
                <i class="far fa-play-circle"></i>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container is-fullwidth">
      There are no comicks. Lets add one now<br /><br />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComickList'
}
</script>

<style lang="sass"></style>
