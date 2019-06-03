<template>
  <div id="CuadroCRUD">
    <div class="modal-content">
      <div class="card">
        <header class="card-header">
          <span class="card-header-title">
            <p class="title">
              cuadro&nbsp;<strong>{{ thisCuadroIndexDisplay }}</strong>
            </p>
          </span>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click="thisShow('cuadro' + thisCuadro._id)"
          >
            <span class="icon">
              <i class="far fa-eye-slash" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div :id="'cuadro' + thisCuadro._id" class="card-content">
          <div :id="'formCuadro' + thisCuadro._id">
            <div class="field-body">
              <div class="field">
                <label class="label is-small">bkg</label>
                <p class="control">
                  <input
                    :value="thisCuadro.bkgCuadro"
                    class="input"
                    type="text"
                    @input="updateCuadro('bkgCuadro', $event.target.value)"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal level-left">
              <label class="label">style</label>
            </div>
            <p class="control">
              <input
                :value="thisCuadro.style"
                class="input"
                type="text"
                @input="updateCuadro('style', $event.target.value)"
              />
            </p>
            <div
              v-for="(tag, indexi) in styleToElem"
              :key="indexi"
              class="field-body"
            >
              <div class="field">
                <label class="label is-small">{{ tag.tag }}</label>
                <p class="control">
                  <input class="input" type="text" :value="tag.value" />
                </p>
              </div>
              <div class="field-label is-normal level-right">
                <label class="label">{{ tag.unity }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(elem, index) in thisCuadro.elem"
      :key="index"
      class="modal-content"
    >
      <div class="card">
        <header class="card-header">
          <span class="card-header-title">
            <p class="title">
              Element&nbsp;
              <strong>{{ index + 1 }}</strong>
              &nbsp;in cuadro&nbsp;
              <strong>{{ thisCuadroIndexDisplay }}</strong>
            </p>
          </span>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click="duplicateElement(elem._id + index)"
          >
            <span class="icon">
              <i class="far fa-clone" aria-hidden="true" />
            </span>
          </a>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click="delElement(elem._id + index)"
          >
            <span class="icon">
              <i class="far fa-trash-alt" aria-hidden="true" />
            </span>
          </a>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click="thisShow(elem._id + index)"
          >
            <span class="icon">
              <i class="far fa-eye-slash" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div :id="elem._id + index" class="card-content">
          <div :id="'formCuadro' + elem._id">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label is-small">typeElem</label>
                  <p class="control is-expanded has-icons-left">
                    <span class="select is-fullwidth" name="category">
                      <select
                        :value="elem.typeElem"
                        @input="
                          updateElem(index, 'typeElem', $event.target.value)
                        "
                      >
                        <option
                          v-for="(elemTypeLabel, indexo) in typeElemList"
                          :key="indexo"
                          :value="elemTypeLabel"
                        >
                          {{ elemTypeLabel }}
                        </option>
                      </select>
                    </span>
                    <span class="icon is-small is-left">
                      <i class="fas fa-globe" />
                    </span>
                  </p>
                </div>
                <div class="field">
                  <label class="label is-small">zIndex</label>
                  <p class="control">
                    <input
                      :value="elem.zIndex"
                      class="input"
                      type="text"
                      @input="updateElem(index, 'zIndex', $event.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div
              v-if="elem.typeElem === 'txt' || elem.typeElem === 'txt-bkg'"
              class="field-body"
            >
              <div class="field">
                <label class="label is-small">txt</label>
                <p class="control">
                  <input
                    :value="elem.txt"
                    class="input"
                    type="text"
                    @input="updateElem(index, 'txt', $event.target.value)"
                  />
                </p>
              </div>
            </div>
            <div
              v-if="
                elem.typeElem === 'character' || elem.typeElem === 'txt-bkg'
              "
              class="field-body"
            >
              <div class="field">
                <label class="label is-small">bkg</label>
                <p class="control">
                  <input
                    :value="elem.bkg"
                    class="input"
                    type="text"
                    @input="updateElem(index, 'bkg', $event.target.value)"
                  />
                </p>
              </div>
            </div>
            <div v-if="elem.typeElem === 'txt-bkg'" class="field-body">
              <div class="field">
                <label class="label is-small">spanStyleToTxtBkg</label>
                <p class="control">
                  <input
                    :value="elem.spanStyleToTxtBkg"
                    class="input"
                    type="text"
                    @input="
                      updateElem(
                        index,
                        'spanStyleToTxtBkg',
                        $event.target.value
                      )
                    "
                  />
                </p>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal level-left">
                <label class="label">style</label>
              </div>
              <p class="control">
                <input
                  :value="elem.style"
                  class="input"
                  type="text"
                  @input="updateElem(index, 'style', $event.target.value)"
                />
              </p>
              <div
                v-for="(tag, indexi) in styleToElem"
                :key="indexi"
                class="field-body"
              >
                <div class="field">
                  <label class="label is-small">{{ tag.tag }}</label>
                  <p class="control">
                    <input class="input" type="text" :value="tag.value" />
                  </p>
                </div>
                <div class="field-label is-normal level-right">
                  <label class="label">{{ tag.unity }}</label>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal level-left">
                <label class="label">transition</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <label class="label is-small">enter</label>
                  <p class="control">
                    <input
                      :value="elem.transition.enter"
                      class="input"
                      type="text"
                      @input="
                        updateElem(
                          index,
                          'transition.enter',
                          $event.target.value
                        )
                      "
                    />
                  </p>
                </div>
                <div class="field">
                  <label class="label is-small">leave</label>
                  <p class="control">
                    <input
                      :value="elem.transition.leave"
                      class="input"
                      type="text"
                      @input="
                        updateElem(
                          index,
                          'transition.leave',
                          $event.target.value
                        )
                      "
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-content">
      <div class="card">
        <footer class="card-footer">
          <a class="card-footer-item" @click="saveCuadroInBD(elem)">
            save
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import elemListToEdit from '~/api/ComickToEditService'

export default {
  name: 'CuadroCRUD',
  props: {
    thisCuadroIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      typeElemList: elemListToEdit.elemType,
      thisCuadroIndexDisplay: parseInt(this.$route.params.order) + 1,
      thisActive: false
    }
  },
  computed: {
    ...mapState({
      thisCuadro: function(state) {
        return state.comick.comick.cuadros[this.thisCuadroIndex]
      }
    })
  },
  methods: {
    thisShow(id) {
      document.getElementById(id).classList.toggle('active')
    },
    updateCuadro(key, value) {
      this.$store.dispatch('comick/updateCuadro1Prop', {
        order: this.thisCuadroIndex,
        key: key,
        value: value
      })
    },
    updateElem(index, key, value) {
      alert(index + ', ' + key + ', ' + value)
      this.$store.dispatch('comick/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        key: key,
        value: value
      })
    },
    delElement(elem) {
      alert(elem)
    },
    duplicateElement(elem) {
      alert(elem)
    },
    saveCuadroInBD(elem) {
      alert(elem)
    }
  }
}
</script>

<style lang="sass">
#CuadroCRUD
  position: absolute
  z-index: 20
  top: 5%
  right: 5%
.modal-content
  overflow: hidden
.card-content
  max-height: 0px
  padding-top: 0
  padding-bottom: 0
  overflow: hidden
.card-content.active
  max-height: 1000px
  padding-top: 1.5rem
  padding-bottom: 1.5rem
</style>
