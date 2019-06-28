<template>
  <div>
    <v-app
      v-if="currentUser"
      id="inspire"
    >
      <!-- <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = false">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
      <v-toolbar
        color="blue-grey"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>Nexus</v-toolbar-title>
        <v-spacer />
      <!-- <v-toolbar-side-icon
        @click.stop="drawerRight = !drawerRight"
      /> -->
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <v-list-tile
            mt-2
            to="/"
          >
            Usuarios
          </v-list-tile>
          <v-list-tile
            mt-2
            :to="{ name: 'Offers' }"
          >
            Ofertas
          </v-list-tile>
          <v-list-tile
            mt-2
            :to="{ name: 'Institutions' }"
          >
            Organizaciones
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer
        v-model="left"
        fixed
        clipped-left
      >
        <v-list dense>
          <v-list-tile @click.stop="left = !left">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Close Temporary Drawer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            justify-center
            align-center
          >
            <v-flex>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <!-- <v-navigation-drawer
      v-model="right"
      right
      temporary
      fixed
    /> -->

      <v-footer
        color="blue-grey"
        class="white--text"
        app
      >
        <span>Pome</span>
        <v-spacer />
        <span>&copy; 2019</span>
      </v-footer>
    </v-app>
    <Login v-if="!currentUser" />
    <AdminFormCreateUser
      v-if="!currentUser"
      :login="true"
    />
  </diV>
</template>

<script>
import { mapState } from 'vuex'
import Login from './components/Login.vue'
import AdminFormCreateUser from './components/AdminFormCreateUser.vue'


export default {
  components: {
    Login,
    AdminFormCreateUser,
  },

  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
  }),
  computed: {
    ...mapState({
      currentUser: 'currentUser',
    }),
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
