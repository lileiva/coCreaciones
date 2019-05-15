<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="primary"
              >
                <v-toolbar-title>Ingreso</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user"
                    prepend-icon="person"
                    name="login"
                    label="Usuario"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="password"
                    prepend-icon="lock"
                    name="password"
                    label="Contraseña"
                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="click"
                >
                  Ingresar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    drawer: null,
    user: '',
    password: '',
    show1: false,
  }),
  methods: {
    click() {
      this.singIn({ email: this.user, password: this.password })
    },
    ...mapActions({
      singIn: 'singIn',
    }),
  },
}
</script>
