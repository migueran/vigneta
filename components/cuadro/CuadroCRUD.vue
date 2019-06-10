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
                  v-for="(style, indexi) in thisCuadro.style"
                  :key="indexi"
                  class="field-body"
                >
                  <div class="field-label is-normal">
                    <label class="label is-small">{{ style.tag }}</label>
                  </div>
                  <p class="control">
                    <input class="input" type="text" :value="style.value" />
                  </p>
                  <div class="field-label is-normal level-right">
                    <label class="label">{{ style.unity }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-label is-normal">
              <label class="label">add style</label>
            </div>
            <div class="field">
              <select @input="updateElem(index, 'Style', $event.target.value)">
                <option disabled value="">Please select one</option>
                <option
                  v-for="(styleTag, indexS) in styleToElem"
                  :key="indexS"
                  :value="elemTypeLabel"
                >
                  {{ styleTag }}
                </option>
              </select>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="Number" value="" />
              </p>
            </div>
            <div class="field">
              <select @input="updateElem(index, 'Style', $event.target.value)">
                <option disabled value="">Please select one</option>
                <option>
                  %
                </option>
                <option>
                  px
                </option>
              </select>
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
                        v-for="(elemTypeLabel, indexo) in typeElemList"
                        :key="indexo"
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
                    type="text"
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
              <div class="field-label is-normal">
                <label class="label is-small">spanStyleToTxtBkg</label>
              </div>
              <div class="field-body">
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
              <div class="field">
                <div class="field-label is-normal">
                  <label class="label">style</label>
                </div>
                <div
                  v-for="(style, indexi) in thisCuadro.style"
                  :key="indexi"
                  class="field-body"
                >
                  <div class="field-label is-normal">
                    <label class="label is-small">{{ style.tag }}</label>
                  </div>
                  <p class="control">
                    <input class="input" type="text" :value="style.value" />
                  </p>
                  <div class="field-label is-normal level-right">
                    <label class="label">{{ style.unity }}</label>
                  </div>
                </div>
                <div class="field-label is-normal">
                  <label class="label">add style</label>
                </div>
                <div class="field">
                  <select
                    @input="updateElem(index, 'Style', $event.target.value)"
                  >
                    <option disabled value="">Please select one</option>
                    <option
                      v-for="(styleTag, indexE) in styleToElem"
                      :key="indexE"
                      :value="elemTypeLabel"
                    >
                      {{ styleTag }}
                    </option>
                  </select>
                </div>
                <div class="field">
                  <p class="control">
                    <input class="input" type="Number" value="" />
                  </p>
                </div>
                <div class="field">
                  <select
                    @input="updateElem(index, 'Style', $event.target.value)"
                  >
                    <option disabled value="">Please select one</option>
                    <option>
                      %
                    </option>
                    <option>
                      px
                    </option>
                  </select>
                </div>
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
                <div class="field-label is-small">
                  <label class="label">leave</label>
                </div>
                <div class="field-body">
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
      this.$store.dispatch('comick/updateElem1Prop', {
        order: this.thisCuadroIndex,
        index: index,
        key: key,
        value: value
      })
    },
    delElement(index) {
      this.$store.dispatch('comick/deleteElem', this.thisCuadroIndex, index)
    },
    duplicateElement(index, elem) {
      delete elem._id
      this.$store.dispatch('comick/duplicateElem', {
        order: this.thisCuadroIndex,
        index: index,
        newElem: elem
      })
    },
    async saveCuadroInBD() {
      const Comick = this.$store.state.comick.comick
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
