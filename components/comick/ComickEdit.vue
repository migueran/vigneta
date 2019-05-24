<template>
  <div class="is-fullwidth">
    <div class="field is-horizontal">
      <div class="field-body columns">
        <div class="field column is-10">
          <p class="control">
            <input v-model="comick.title" type="text" class="input" />
          </p>
        </div>
        <div class="field level is-narrow column is-2">
          <p class="control">
            draft:
            <input v-model="comick.draft" class="checkbox" type="checkbox" />
          </p>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body columns">
        <div class="field column is-12">
          <div class="control">
            <textarea
              v-model="comick.description"
              class="textarea"
              rows="1"
              cols="32"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body columns">
        <div class="field column is-4">
          <span class="tags">
            <span
              v-for="(categoryLabel, index) in comick.category"
              :key="index"
              class="tag is-dark"
            >
              {{ categoryLabel }}
              <button
                class="delete is-small"
                @click="deleteCategory(categoryLabel)"
              />
            </span>
          </span>
        </div>
        <div class="field column is-3">
          <p class="control is-expanded has-icons-left">
            <span class="select is-fullwidth" name="category">
              <select v-model="selectCategory">
                <option :value="null" disabled>Select a category</option>
                <option
                  v-for="(categoryLabel, index) in CategoryList"
                  :key="index"
                  :value="categoryLabel"
                  :disabled="isCategoryInComick(categoryLabel, comick.category)"
                >
                  {{ categoryLabel }}
                </option>
              </select>
            </span>
            <span class="icon is-small is-left">
              <i class="fas fa-globe"></i>
            </span>
          </p>
        </div>
        <div class="field-body column is-1">
          <div class="field">
            <button
              class="button is-text"
              :disabled="selectCategory === null"
              @click="addCategory(selectCategory)"
            >
              add
            </button>
          </div>
        </div>
        <div class="field column is-3">
          <p class="control is-expanded">
            <input
              v-model="user"
              class="input"
              type="text"
              name="author"
              disabled
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList from '@/api/CategoryService'

export default {
  name: 'ComickEdit',
  data() {
    return {
      CategoryList: [],
      user: 'testUserDisplayName',
      selectCategory: null
    }
  },
  computed: {
    comick() {
      return this.$store.state.comick.comick
    }
  },
  mounted() {
    this.CategoryList = CategoryList.category
  },
  methods: {
    addCategory(newCategory) {
      this.comick.category.push(newCategory)
      this.selectCategory = null
    },
    deleteCategory(deleteThisCategory, itemList) {
      let index = 0
      if (itemList === undefined) {
        itemList = this.comick.category
      }
      while (index < itemList.length) {
        if (itemList[index] !== deleteThisCategory) {
          index++
        } else {
          itemList.splice(index, 1)
          index = itemList.length
        }
      }
      return itemList
    },
    isCategoryInComick(newItem, itemList) {
      let matched = false
      let index = 0
      if (itemList === undefined) {
        return true
      }
      while (index < itemList.length) {
        if (itemList[index] !== newItem) {
          index++
        } else {
          index = itemList.length
          matched = true
        }
      }
      return matched
    }
  }
}
</script>

<style lang="sass"></style>
