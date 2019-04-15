<template>
  <v-container>
    <v-form>
      <v-layout
        row
        wrap
        elevation-1
        pa-2
      >
        <v-flex xs12>
          <v-text-field
            v-model="user.nick"
            label="Ingresar nick"
          />
          <v-text-field
            v-model="user.email"
            label="Ingresar email"
          />
          <v-text-field
            v-model="user.company"
            label="Ingresar organización"
          />
          <v-text-field
            v-model="user.password"
            label="Contraseña"
          />
          <v-text-field
            v-model="user.role"
            label="Rol"
          />
        </v-flex>
        <v-flex xs12>
          <v-btn
            color="blue darken-2"
            :disabled="!valid"
            flat
            @click.prevent="onSubmit"
          >
            Subir
          </v-btn>
          <v-btn
            color="blue darken-2"
            flat
            @click="close"
          >
            Cancelar
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
import randomPassword from '../functions/RandomPassword'

export default {
  name: 'AdminFormCreateUser',
  data() {
    return {
      valid: true,
      passwordGenerator: randomPassword,
      user: {
        nick: '',
        email: '',
        company: '',
        password: randomPassword(),
        role: 'admin',
      },
    }
  },
  methods: {
    ...mapActions('users', [
      'createUser',
    ]),
    onSubmit(evt) {
      evt.preventDefault()
      this.createUser({ user: { ...this.user } })
      this.user = {
        nick: '',
        email: '',
        company: '',
        password: '',
      }
      this.$emit('saveUser')
      this.user.password = this.passwordGenerator()
    },
    close() {
      this.$emit('closeDialog')
    },
  },
}
</script>

<style scoped>

</style>
