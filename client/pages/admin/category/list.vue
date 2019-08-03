<template>
  <v-card>
    <v-card-title>
      <h1>Category</h1>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="handlerCreate">Create</v-btn>
    </v-card-title>
    <v-data-table :headers="headers" :items="list" :search="search" :loading="loading">
      <template v-slot:items="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.descriptionEN }}</td>
        <td>
          <v-icon small class="mr-2" @click="handlerEdit(item.id)">edit</v-icon>
          <v-icon small>delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'admin',
  data: () => ({
    search: '',
    list: [],
    headers: [
      { text: '#', value: 'id' },
      { text: 'Description', value: 'descriptionEN' },
      { text: 'Action', value: 'action' }
    ],
    loading: false
  }),
  methods: {
    ...mapActions('category', ['getAll']),
    handlerEdit(id) {
      this.$router.push({ name: 'admin-category-id', params: { id } })
    },
    handlerCreate() {
      this.$router.push({ name: 'admin-category-id' })
    }
  },
  mounted() {
    this.loading = true
    this.getAll()
      .then(({ data }) => {
        this.list = data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>

