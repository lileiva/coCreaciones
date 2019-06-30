<template>
  <v-container class="user-form">
    <h1>
      Registrate
    </h1>
    <v-form>
      <v-layout
        row
        wrap
        elevation-1
        pa-2
      >
        <v-flex xs12>
          <v-text-field
            v-model="user.email"
            label="Ingresar email"
          />
          <v-text-field
            v-model="user.name"
            label="Ingresar nombre"
          />
          <v-text-field
            v-model="user.degree"
            label="Ingresar grado academico"
          />
          <v-text-field
            v-model="user.CV"
            label="Ingresar cvs"
          />
          <v-checkbox
            v-model="user.admin"
            label="Es admin?"
            hide-details
          />
          <v-text-field
            id="password"
            v-model="user.password"
            name="password"
            label="Contraseña"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          />
        </v-flex>
        <v-flex xs12>
          <v-btn
            color="blue darken-2"
            :disabled="!valid"
            flat
            @click.prevent="onSubmit"
          >
            Registarme
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'AdminFormCreateUser',
  props: {
    login: Boolean,
  },
  data() {
    return {
      valid: true,
      user: {
        CV: '',
        email: '',
        degree: '',
        name: '',
        password: '',
        admin: false,
      },
      drawer: null,
      show1: false,
    }
  },
  methods: {
    ...mapActions('users', [
      'createUser',
    ]),
    onSubmit(evt) {
      evt.preventDefault()
      this.user.CV = this.user.CV.split(';')
      this.createUser({ user: { ...this.user }, login: this.login })
      // this.user = {
      //   CV: '',
      //   email: '',
      //   degree: '',
      //   name: '',
      //   password: '',
      // }
    },
  },
}
</script>

<style scoped>

</style>
