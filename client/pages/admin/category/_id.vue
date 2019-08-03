<template>
  <v-layout>
    <v-flex md12>
      <v-card class="pa-3">
        <form @submit.prevent="handlerSubmit">
          <v-layout>
            <v-flex sm12 pr-1>
              <v-text-field v-model="form.descriptionEN" name="title" label="Title"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex>
              <vue-dropzone id="dropzone" :options="dropzoneOptions" ref="myVueDropzone"></vue-dropzone>
            </v-flex>
          </v-layout>

          <v-divider class="mt-3"></v-divider>

          <v-layout>
            <v-flex>
              <h1>Formulary</h1>

              <div v-if="hasGroups">
                <p class="text-sm-center">No groups found</p>
              </div>

              <div v-else>
                <draggable v-model="firstForm.groups">
                  <v-card class="mt-2" v-for="group in firstForm.groups" :key="group.id">
                    <v-card-text>
                      <v-text-field
                        v-model="group.descriptionEN"
                        name="description-group"
                        label="Description"
                        id="description-group"
                      ></v-text-field>

                      <div v-if="group.fields.length === 0">
                        <p class="text-sm-center">No fields found</p>
                      </div>
                      <div v-else>
                        <draggable v-model="group.fields">
                          <div v-for="field in group.fields" :key="field.id">
                            <v-layout>
                              <v-flex pl-1 md1>
                                <v-btn text icon>
                                  <v-icon>menu</v-icon>
                                </v-btn>
                              </v-flex>
                              <v-flex pr-1 md6>
                                <v-text-field
                                  v-model="field.descriptionEN"
                                  name="name"
                                  label="Label"
                                  id="id"
                                ></v-text-field>
                              </v-flex>

                              <v-flex pl-1 md6>
                                <v-select
                                  :items="optionsTypeField"
                                  v-model="field.type"
                                  label="Type field"
                                  item-text="description"
                                  item-value="id"
                                ></v-select>
                              </v-flex>
                              <v-flex pl-1 md1>
                                <v-btn text icon @click="handlerRemoveField(group, field)">
                                  <v-icon>close</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-layout>
                          </div>
                        </draggable>
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-layout row>
                        <v-btn text icon>
                          <v-icon>swap_vert</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                          depressed
                          outline
                          small
                          color="primary"
                          @click="handlerAddField(group)"
                        >Add field</v-btn>
                        <v-btn
                          outline
                          depressed
                          small
                          color="error"
                          @click="handlerRemoveGroup(group)"
                        >Remove group</v-btn>
                      </v-layout>
                    </v-card-actions>
                  </v-card>
                </draggable>
              </div>

              <form @submit.prevent="handlerSubmitGrupo">
                <v-text-field name="group" label="Grupo" id="group" v-model="formGroup.description"></v-text-field>
                <v-btn type="submit" small color="primary" class="ma-0">Create group</v-btn>
              </form>
            </v-flex>
          </v-layout>
          <div style="text-align: right;">
            <v-btn type="submit" color="primary">Save</v-btn>
          </div>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import vueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import draggable from 'vuedraggable'
import { mapActions } from 'vuex'

export default {
  layout: 'admin',
  components: { vueDropzone, draggable },
  data() {
    return {
      id: null,
      formGroup: {
        description: ''
      },
      form: {
        descriptionEN: '',
        descriptionPT: '',
        forms: [
          {
            order: 1,
            groups: []
          }
        ]
      },
      optionsTypeField: [
        {
          id: 3,
          description: 'Select'
        },
        {
          id: 1,
          description: 'Text'
        },
        {
          id: 2,
          description: 'Number'
        }
      ],
      dropzoneOptions: {
        url: 'https://httpbin.org',
        thumbnailWidth: 200,
        addRemoveLinks: true,
        autoProcessQueue: false,
        maxFiles: 1
      }
    }
  },
  beforeMount() {
    this.id = this.$route.params.id
  },
  mounted() {
    if (this.id)
      this.getOne(this.id).then(({ data }) => {
        this.form = data
      })
  },
  computed: {
    firstForm() {
      return this.form.forms[0]
    },
    hasGroups() {
      if (!this.firstForm) return false

      return this.firstForm.groups.length === 0
    }
  },
  methods: {
    ...mapActions('category', ['create', 'getOne']),
    handlerSubmitGrupo() {
      this.firstForm.groups.push({
        descriptionEN: this.formGroup.description,
        descriptionPT: '',
        fields: [],
        order: 1
      })

      this.formGroup.description = ''
    },
    handlerAddField(group) {
      group.fields.push({
        descriptionEN: '',
        descriptionPT: '',
        type: 'text',
        order: 1
      })
    },
    handlerRemoveGroup(paramGroup) {
      this.firstForm.groups = this.firstForm.groups.filter(group => {
        return paramGroup !== group
      })
    },
    handlerRemoveField(group, paramField) {
      group.fields = group.fields.filter(field => {
        return paramField !== field
      })
    },
    handlerSubmit() {
      this.create(this.form)
    }
  }
}
</script>

