<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-form @submit.prevent="handlerLogin">
              <v-card class="elevation">
                <v-card-text>
                  <v-text-field
                    v-model="form.username"
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" type="submit">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    loading: false
  }),
  methods: {
    ...mapActions('auth', ['auth']),
    handlerLogin() {
      this.loading = true
      this.auth(this.form)
        .then(() => {
          this.$router.push({ name: 'admin' })
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>

