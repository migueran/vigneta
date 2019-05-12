<template>
  <div>
    <h2 class="subtitle">Cuadros in comick: {{ comickTitulo }}</h2>
    <table id="cuadroList" class="table has-background-black is-fullwidth">
      <thead>
        <tr>
          <th>order</th>
          <th>elems</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cuadro, index) in comickCuadros" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ cuadro.elem | toLength }}</td>
          <td class="has-text-right">
            <nuxt-link
              :to="index + '/edit'"
              class="button is-primary is-outlined is-small"
              title="Edit Cuadro"
            >
              <i class="far fa-edit"></i>
            </nuxt-link>
            <a
              class="button is-primary is-outlined is-small"
              title="Delete cuadro"
            >
              <i class="far fa-trash-alt"></i>
            </a>
            <a
              class="button is-primary is-outlined is-small"
              title="Duplicate cuadro"
            >
              <i class="far fa-clone"></i>
            </a>
            <nuxt-link
              :to="index + '/play'"
              class="button is-primary is-outlined is-small"
              title="show cuadro"
            >
              <i class="far fa-play-circle"></i>
            </nuxt-link>
            <a
              class="button is-primary is-outlined is-small"
              title="add cuadro after"
            >
              <i class="fa fa-plus"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CuadroList',
  filters: {
    toLength(value) {
      if (value !== undefined) {
        return value.length
      } else {
        return '?'
      }
    }
  },
  props: {
    comickTitulo: {
      type: String,
      default: 'value'
    },
    comickCuadros: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    }
  }
}
</script>

<style lang="sass"></style>
