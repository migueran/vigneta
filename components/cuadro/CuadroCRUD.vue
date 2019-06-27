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
            <div class="field is-horizontal">
              <div class="field-label is-normal level-left">
                <label class="label">bkg</label>
              </div>
              <div class="field">
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
            <div class="field-body">
              <div class="field-label is-normal">
                <label class="label">style</label>
              </div>
              <div class="field">
                <div
                  v-for="(style, index01) in thisCuadro.style"
                  :key="index01"
                  class="field-body"
                >
                  <div class="field-label is-normal">
                    <label class="label is-small">{{ style.tag }}</label>
                  </div>
                  <p class="control">
                    <input
                      class="input"
                      type="number"
                      :value="style.value"
                      :min="style.unity === '%' ? 0 : inherit"
                      :max="style.unity === '%' ? 100 : inherit"
                      @input="updateCuadroStyle(style.tag, $event.target.value)"
                    />
                  </p>
                  <div class="field-label is-normal level-right">
                    <label class="label">{{ style.unity }}</label>
                  </div>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                    @click="delStyle(-1, index01)"
                  >
                    <span class="icon">
                      <i class="far fa-trash-alt" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="field">
              <select v-model="newStyleCuadro.tag">
                <option disabled value="">Please select one</option>
                <option
                  v-for="(styleTag, index02) in styleToElem"
                  :key="index02"
                  :value="styleTag"
                >
                  {{ styleTag }}
                </option>
              </select>
            </div>
            <div class="field">
              <p class="control">
                <input
                  v-model="newStyleCuadro.value"
                  class="input"
                  type="Number"
                />
              </p>
            </div>
            <div class="field">
              <select v-model="newStyleCuadro.unity">
                <option disabled value="">Please select one</option>
                <option value="%">%</option>
                <option value="px">px</option>
              </select>
            </div>
            <div class="field">
              <button class="button" @click="addStyle(-1, newStyleCuadro)">
                Add
              </button>
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
            @click="duplicateElement(index, elem)"
          >
            <span class="icon">
              <i class="far fa-clone" aria-hidden="true" />
            </span>
          </a>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click="delElement(index)"
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
              <div class="field-label is-normal">
                <label class="label">typeElem</label>
              </div>
              <div class="field-body">
                <p class="control has-icons-left">
                  <span class="select is-expanded" name="category">
                    <select
                      :value="elem.typeElem"
                      @input="
                        updateElem(index, 'typeElem', $event.target.value)
                      "
                    >
                      <option
                        v-for="(elemTypeLabel, index03) in typeElemList"
                        :key="index03"
                        :value="elemTypeLabel"
                      >
                        {{ elemTypeLabel }}
                      </option>
                    </select>
                  </span>
                  <span class="icon is-small is-left">
                    <i class="fas fa-hashtag" />
                  </span>
                </p>
              </div>
              <div class="field-label is-normal">
                <label class="label">zIndex</label>
              </div>
              <div class="field-body">
                <p class="control">
                  <input
                    :value="elem.zIndex"
                    class="input"
                    type="number"
                    @input="updateElem(index, 'zIndex', $event.target.value)"
                  />
                </p>
              </div>
            </div>
            <div
              v-if="elem.typeElem === 'txt' || elem.typeElem === 'txt-bkg'"
              class="field is-horizontal"
            >
              <div class="field-label is-normal">
                <label class="label">txt</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <textarea
                      :value="elem.txt"
                      class="input"
                      type="textarea"
                      @input="updateElem(index, 'txt', $event.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div
              v-if="
                elem.typeElem === 'character' || elem.typeElem === 'txt-bkg'
              "
              class="field is-horizontal"
            >
              <div class="field-label is-normal">
                <label class="label is-small">bkg</label>
              </div>
              <div class="field-body">
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
            <div v-if="elem.typeElem === 'txt-bkg'" class="field is-horizontal">
              <div class="field-body">
                <div class="field-label is-normal">
                  <label class="label">spanStyleToTxtBkg</label>
                </div>
                <p class="control">
                  <input
                    :value="elem.spanStyleToTxtBkg.top"
                    class="input"
                    type="Number"
                    min="0"
                    @input="
                      updateElemSpanStyle(index, 'top', $event.target.value)
                    "
                  />
                </p>
                <div class="field-label is-normal">
                  <label class="label">px</label>
                </div>
                <p class="control">
                  <input
                    :value="elem.spanStyleToTxtBkg.right"
                    class="input"
                    type="Number"
                    min="0"
                    max="100"
                    @input="
                      updateElemSpanStyle(index, 'right', $event.target.value)
                    "
                  />
                </p>
                <div class="field-label is-normal">
                  <label class="label">%</label>
                </div>
                <p class="control">
                  <input
                    :value="elem.spanStyleToTxtBkg.bottom"
                    class="input"
                    type="Number"
                    min="0"
                    @input="
                      updateElemSpanStyle(index, 'bottom', $event.target.value)
                    "
                  />
                </p>
                <div class="field-label is-normal">
                  <label class="label">px</label>
                </div>
                <p class="control">
                  <input
                    :value="elem.spanStyleToTxtBkg.left"
                    class="input"
                    type="Number"
                    min="0"
                    max="100"
                    @input="
                      updateElemSpanStyle(index, 'left', $event.target.value)
                    "
                  />
                </p>
                <div class="field-label is-normal">
                  <label class="label">%</label>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">style</label>
              </div>
              <div
                v-for="(style, index04) in elem.style"
                :key="index04"
                class="field-body"
              >
                <div class="field-label is-normal">
                  <label class="label is-small">{{ style.tag }}</label>
                </div>
                <p class="control">
                  <input
                    class="input"
                    type="number"
                    :value="style.value"
                    :min="style.unity === '%' ? 0 : inherit"
                    :max="style.unity === '%' ? 100 : inherit"
                    @input="
                      updateElemStyle(index, style.tag, $event.target.value)
                    "
                  />
                </p>
                <div class="field-label is-normal level-right">
                  <label class="label">{{ style.unity }}</label>
                </div>
                <a
                  href="#"
                  class="card-header-icon"
                  aria-label="more options"
                  @click="delStyle(index, index04)"
                >
                  <span class="icon">
                    <i class="far fa-trash-alt" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div class="field">
                <select v-model="newStyleElem.tag">
                  <option disabled value="">Please select one</option>
                  <option
                    v-for="(styleTag, index05) in styleToElem"
                    :key="index05"
                    :value="styleTag"
                  >
                    {{ styleTag }}
                  </option>
                </select>
              </div>
              <div class="field">
                <p class="control">
                  <input
                    v-model="newStyleElem.value"
                    class="input"
                    type="Number"
                  />
                </p>
              </div>
              <div class="field">
                <select v-model="newStyleElem.unity">
                  <option disabled value="">Please select one</option>
                  <option value="%">%</option>
                  <option value="px">px</option>
                </select>
              </div>
              <div class="field">
                <button class="button" @click="addStyle(index, newStyleElem)">
                  Add
                </button>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">transition</label>
              </div>
              <div class="field-body">
                <div class="field-label is-small">
                  <label class="label">enter</label>
                </div>
                <div class="field-body">
                  <p class="control">
                    <input
                      :value="elem.transition.enter"
                      class="input"
                      type="number"
                      min="0"
                      @input="
                        updateElemTransition(
                          index,
                          'enter',
                          $event.target.value
                        )
                      "
                    />
                  </p>
                </div>
                <div class="field-label is-small">
                  <label class="label">leave</label>
                </div>
                <div class="field-body">
                  <p class="control">
                    <input
                      :value="elem.transition.leave"
                      class="input"
                      type="number"
                      min="0"
                      @input="
                        updateElemTransition(
                          index,
                          'leave',
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
import ComicksService from '~/api/ComicksService'

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
      styleToElem: elemListToEdit.styleElem,
      thisCuadroIndexDisplay: parseInt(this.$route.params.order) + 1,
      newStyleCuadro: {},
      newStyleElem: {},
      thisActive: false
    }
  },
  computed: {
    ...mapState({
      thisCuadro: function(state) {
        return state.cuadros.cuadro[this.thisCuadroIndex]
      }
    })
  },
  methods: {
    thisShow(id) {
      document.getElementById(id).classList.toggle('active')
    },
    updateCuadro(key, value) {
      this.$store.dispatch('cuadros/updateCuadro1Prop', {
        order: this.thisCuadroIndex,
        key: key,
        value: value
      })
    },
    updateCuadroStyle(key, value) {
      this.$store.dispatch('cuadros/updateCuadro1Prop', {
        order: this.thisCuadroIndex,
        type: 'style',
        key: key,
        value: value
      })
    },
    updateElem(index, key, value) {
      this.$store.dispatch('cuadros/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        key: key,
        value: value
      })
    },
    updateElemSpanStyle(index, key, value) {
      this.$store.dispatch('cuadros/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        type: 'spanStyleToTxtBkg',
        key: key,
        value: value
      })
    },
    updateElemStyle(index, key, value) {
      this.$store.dispatch('cuadros/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        type: 'style',
        key: key,
        value: value
      })
    },
    updateElemTransition(index, key, value) {
      this.$store.dispatch('cuadros/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        type: 'transition',
        key: key,
        value: value
      })
    },
    addStyle(index, newStyle) {
      this.$store.dispatch('cuadros/addStyle', {
        order: this.thisCuadroIndex,
        index: index,
        newStyle: newStyle
      })
    },
    delStyle(indexElem, indexStyle) {
      this.$store.dispatch('cuadros/delStyle', {
        order: this.thisCuadroIndex,
        elem: indexElem,
        indexStyle: indexStyle
      })
    },
    delElement(index) {
      this.$store.dispatch('cuadros/deleteElem', this.thisCuadroIndex, index)
    },
    duplicateElement(index, elem) {
      delete elem._id
      this.$store.dispatch('cuadros/duplicateElem', {
        order: this.thisCuadroIndex,
        index: index,
        newElem: elem
      })
    },
    async saveCuadroInBD() {
      const Comick = this.$store.state.comick
      await ComicksService.updateComickInBD(Comick)
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
