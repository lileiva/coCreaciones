<template>
  <v-container class="institution-form">
    <v-form class="create-form">
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
          <v-text-field
            v-model="organization.members"
            label="Miembros"
          />
        </v-flex>
        <v-flex xs12>
          <v-btn
            class="sbm-btn"
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

export default {
  name: 'AdminFormCreateInstitution',
  data() {
    return {
      valid: true,
      organization: {
        name: '',
        description: '',
        logo: '',
      },
    }
  },
  methods: {
    ...mapActions('organizations', [
      'createOrganization',
    ]),
    onSubmit(evt) {
      evt.preventDefault()
      this.createOrganization({ organization: { ...this.organization } })
      this.organization = {
        name: '',
        description: '',
        logo: '',
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

</style>
