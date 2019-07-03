<template>
  <v-container>
    <v-form class="form">
      <v-layout
        row
        wrap
        elevation-1
        pa-2
      >
        <v-flex xs12>
          <v-text-field
            v-model="organization.name"
            label="Nombre"
          />
          <v-text-field
            v-model="organization.description"
            label="Descripción"
          />
          <v-text-field
            v-model="organization.logo"
            label="Logo"
          />
          <v-select
            v-model="organization.members"
            :items="usuarios"
            :menu-props="{ maxHeight: '400' }"
            label="Miembros"
            multiple
            hint="Selecciona los miembros de la organizacion"
            persistent-hint
          />
        </v-flex>
        <v-flex xs12>
          <v-btn
            class="cbutton"
            color="#282262"
            dark
            :disabled="!valid"
            flat
            @click.prevent="onSubmit"
          >
            Subir
          </v-btn>
          <v-btn
            class="cbutton"
            color="#282262"
            dark
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminFormCreateOrganization',
  data() {
    return {
      valid: true,
      organization: {
        name: '',
        description: '',
        logo: '',
        members: [],
      },
      drawer: null,
      show1: false,
    }
  },
  computed: {
    usuarios() {
      if (!this.users) return []

      return Object.keys(this.users).map((key) => {
        const u = this.users[key]
        return { value: u.id, text: u.name }
      })
    },
    ...mapState('users', ['users']),
  },
  created() {
    this.fetchUsers().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 500)
    })
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
    ...mapActions('institutions', ['createInstitution']),
    onSubmit(evt) {
      evt.preventDefault()
      this.createInstitution({ institution: this.organization })
      this.organization = {
        name: '',
        description: '',
        logo: '',
        members: '',
      }
      this.$emit('saveOrganization')
    },
    close() {
      this.$emit('closeDialog')
    },
  },
}
</script>

<style scoped>
.cbutton {
  background-color: #282262 !important;
}
</style>
