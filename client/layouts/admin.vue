<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="true"
      fixed
      app
      dark
      class="z-50"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/admin'
        },
        {
          icon: 'widgets',
          title: 'Category',
          to: '/admin/category/list'
        },
        {
          icon: 'label',
          title: 'Type of tools',
          to: '/admin/inspire'
        },
        {
          icon: 'gavel',
          title: 'Tools',
          to: '/admin/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Admin'
    }
  }
}
</script>
