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
                    v-model="thisCuadro.bkgCuadro"
                    class="input"
                    type="text"
                  />
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal level-left">
              <label class="label">style</label>
            </div>
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
        <footer class="card-footer">
          <a class="card-footer-item" @click="editElement(elem)">Edit elem</a>
          <a class="card-footer-item" @click="delElement(elem)">del elem</a>
          <a class="card-footer-item" @click="duplicateElement(elem)">
            duplicate elem
          </a>
        </footer>
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
                      <select v-model="selectType">
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
                    <input v-model="elem.zIndex" class="input" type="text" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field-body">
              <div class="field">
                <label class="label is-small">txt</label>
                <p class="control">
                  <input v-model="elem.txt" class="input" type="text" />
                </p>
              </div>
            </div>
            <div class="field-body">
              <div class="field">
                <label class="label is-small">bkg</label>
                <p class="control">
                  <input v-model="elem.bkg" class="input" type="text" />
                </p>
              </div>
            </div>
            <div class="field-body">
              <div class="field">
                <label class="label is-small">spanStyleToTxtBkg</label>
                <p class="control">
                  <input
                    v-model="elem.spanStyleToTxtBkg"
                    class="input"
                    type="text"
                  />
                </p>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal level-left">
                <label class="label">style</label>
              </div>
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
                    <input class="input" type="text" />
                  </p>
                </div>
                <div class="field">
                  <label class="label is-small">leave</label>
                  <p class="control">
                    <input class="input" type="text" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" @click="editElement(elem)">Edit elem</a>
          <a class="card-footer-item" @click="delElement(elem)">del elem</a>
          <a class="card-footer-item" @click="duplicateElement(elem)">
            duplicate elem
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import elemListToEdit from '~/api/ComickToEditService'

export default {
  name: 'CuadroCRUD',
  props: {
    thisCuadro: {
      type: Object,
      default: function() {
        return {
          elem:
            '{"elem":[{"transition":{"enter":null,"leave":null},"zIndex":1,"_id":"5c45e02756ba760c1a26b192","typeElem":"txt":"texto","style":"",}],"_id":"5c45e02756ba760c1a26b193","bkgCuadro":""}'
        }
      }
    }
  },
  data() {
    return {
      typeElemList: elemListToEdit.elemType,
      thisCuadroIndexDisplay: parseInt(this.$route.params.order) + 1,
      thisActive: false
    }
  },
  methods: {
    thisShow(id) {
      document.getElementById(id).classList.toggle('active')
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
.card-content, .card-content ~ .card-footer
  max-height: 0px
  padding-top: 0
  padding-bottom: 0
.card-content.active, .card-content.active ~ .card-footer
  max-height: 1000px
  padding-top: 1.5rem
  padding-bottom: 1.5rem
</style>
