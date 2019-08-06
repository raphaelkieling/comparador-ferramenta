<template>
  <v-layout>
    <v-flex md12>
      <v-card class="pa-3">
        <form @submit.prevent="handlerSubmit">
          <v-layout>
            <v-flex sm12 pr-1>
              <v-text-field v-model="form.descriptionEN" name="title" label="Title (english)"></v-text-field>
            </v-flex>
            <v-flex sm12 pl-1>
              <v-text-field v-model="form.descriptionPT" name="title" label="Title (portuguese)"></v-text-field>
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
                      <v-layout>
                        <v-flex pr-1 md6>
                          <v-text-field
                            v-model="group.descriptionEN"
                            name="description-group"
                            label="Description (english)"
                            id="description-group"
                          ></v-text-field>
                        </v-flex>
                        <v-flex pl-1 md6>
                          <v-text-field
                            v-model="group.descriptionPT"
                            name="description-group"
                            label="Description (portuguese)"
                            id="description-group"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>

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
                              <v-flex pr-1 md4>
                                <v-text-field
                                  v-model="field.descriptionEN"
                                  name="name"
                                  label="Label (english)"
                                  id="id"
                                ></v-text-field>
                              </v-flex>

                              <v-flex pr-1 md4>
                                <v-text-field
                                  v-model="field.descriptionPT"
                                  name="name"
                                  label="Label (portuguese)"
                                  id="id"
                                ></v-text-field>
                              </v-flex>

                              <v-flex pl-1 md4>
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

              <form @submit.prevent="handlerSubmitGroup">
                <v-layout>
                  <v-flex pr-1 md6>
                    <v-text-field
                      name="group-en"
                      label="Group (english)"
                      id="group-en"
                      v-model="formGroup.descriptionEN"
                    ></v-text-field>
                  </v-flex>
                  <v-flex pl-1 md6>
                    <v-text-field
                      name="group-pt"
                      label="Group (portuguese)"
                      id="group-pt"
                      v-model="formGroup.descriptionPT"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
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
import { Category } from '~/domain/category'
import { Field } from '~/domain/field'
import { Form } from '~/domain/form'
import { Image } from '~/domain/image'
import { Group } from '~/domain/group'

export default {
  layout: 'admin',
  components: { vueDropzone, draggable },
  data() {
    return {
      id: null,
      formGroup: {
        descriptionEN: '',
        descriptionPT: ''
      },
      form: {
        forms: []
      },
      optionsTypeField: [
        {
          id: 1,
          description: 'Text'
        },
        {
          id: 2,
          description: 'Number'
        },
        {
          id: 3,
          description: 'Select'
        }
      ],
      dropzoneOptions: {
        url: process.env.baseUrl,
        thumbnailWidth: 200,
        addRemoveLinks: true,
        autoProcessQueue: false,
        maxFiles: 1
      }
    }
  },
  beforeMount() {
    this.id = this.$route.params.id
    this.form.forms = [new Form()]
  },
  mounted() {
    if (this.id)
      this.getOne(this.id).then(({ data }) => {
          console.log(data)
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
    handlerSubmitGroup() {
      this.firstForm.groups.push(
        new Group({
          descriptionEN: this.formGroup.descriptionEN,
          descriptionPT: this.formGroup.descriptionPT
        })
      )

      this.formGroup.descriptionEN = ''
      this.formGroup.descriptionPT = ''

    },
    handlerAddField(group) {
      group.fields.push(new Field())
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
      const [photo] = this.$refs.myVueDropzone.getAcceptedFiles()

      if (!photo) return

      this.form.image = new Image({
        base64: photo.dataURL
      })

      this.create(this.form).then(({ data }) => {
        console.table(data)
      })
    }
  }
}
</script>

