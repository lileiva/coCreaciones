<template>
  <div>
    <v-app
      v-if="currentUser"
      id="inspire"
    >
      <v-toolbar
        id="upperNav"
        color="blue-grey"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Nexus</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-navigation-drawer
        id="cssmenu"
        v-model="drawer"
        fixed
        app
      >
        <h2 class="centered">
          Nexus
        </h2>
        <v-list dense>
          <v-list-tile
            mt-2
            to="/"
            class="last"
          >
            Usuarios
          </v-list-tile>
          <v-list-tile
            mt-2
            :to="{ name: 'Offers' }"
            class="last"
          >
            Ofertas
          </v-list-tile>
          <v-list-tile
            mt-2
            :to="{ name: 'Institutions' }"
            class="last"
          >
            Organizaciones
          </v-list-tile>
        </v-list>
        <p
          class="bottom"
          style="font-size:16px"
        >
          El lugar para encontrar tu nueva oportunidad
        </p>
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

      <v-footer
        color="#282262"
        class="white--text"
        app
      >
        <span class="centered">
          CoCreaciones - NA, JMC, LL, SV
          &copy; 2019
        </span>
      </v-footer>
    </v-app>
    <Login v-if="!currentUser" />
    <!-- <AdminFormCreateUser v-if="!currentUser" :login="true"/> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Login from './components/Login.vue'
// import AdminFormCreateUser from "./components/AdminFormCreateUser.vue";

export default {
  components: {
    Login,
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
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

a:link {
  color: #282262;
  text-decoration: none;
}

a:visited {
  color: #282262;
  text-decoration: none;
}

.centered {
  text-align: center;
  margin-bottom: 15px;
  color: #efefef;
  width: 100%;
  margin-top: 15px;
}

.bottom {
  position: absolute;
  bottom: 0%;
  color: #282262;
  text-align: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #282262;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #282262;
    &.router-link-exact-active {
      color: #282262;
    }
  }
}

p span h1 h2 h3 h4 h5 h6 td th tr div {
  font-family: "Montserrat", sans-serif !important;
}

#upperNav {
  background-color: #282262 !important;
}

.primary--text {
  color: #282262 !important;
  caret-color: #282262 !important;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
/* Starter CSS for Flyout Menu */

#cssmenu,
#cssmenu .v-list,
#cssmenu .v-list .last,
#cssmenu .v-list .v-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
}
#cssmenu .v-list {
  position: relative;
  z-index: 597;
  float: left;
  width: 100%;
}
#cssmenu .v-list .last {
  float: left;
  min-height: 1px;
  line-height: 1em;
  vertical-align: middle;
}
#cssmenu .v-list .last.hover,
#cssmenu .v-list .last:hover {
  position: relative;
  z-index: 599;
  cursor: default;
}
#cssmenu .v-list .last:hover > .v-list {
  visibility: visible;
}
#cssmenu .v-list .last {
  float: none;
}
/* Custom CSS Styles */
#cssmenu {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  width: 200px;
}
#cssmenu .v-list a,
#cssmenu .v-list a:link,
#cssmenu .v-list a:visited {
  display: block;
  color: #848889;
  text-decoration: none;
  font-weight: 300;
}
#cssmenu > .v-list {
  float: none;
}
#cssmenu {
  background: #efefef;
}
#cssmenu .v-list {
  background: #efefef;
}
.theme--light.v-navigation-drawer {
  background: #efefef;
}
#cssmenu > .v-list > .last {
  border-left: 3px solid #d7d8da;
}
#cssmenu > .v-list > .last > a {
  padding: 10px 20px;
}
#cssmenu > .v-list > .last:hover {
  border-left: 3px solid #282262;
}
#cssmenu .v-list .last:hover > a {
  color: #282262;
}
#cssmenu > .v-list > .last:hover {
  background: #f6f6f6;
}
</style>
