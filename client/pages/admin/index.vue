<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nesciunt. Placeat, optio atque nam, aspernatur incidunt labore porro animi, eligendi velit corrupti error nihil laboriosam odio quis neque harum accusamus.</v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'admin',
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
