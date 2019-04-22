<template>
  <div class="createNewInstanceButton">
    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-btn
        slot="activator"
        color="primary"
        dark
        class="mb-2"
      >
        Crear {{ instance }}
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Nuevo {{ instance }}</span>
        </v-card-title>
        <v-card-text v-if="instance == 'Organización'">
          <AdminFormCreateOrganization
            @closeDialog="close"
            @saveOrganization="close"
          />
        </v-card-text>
        <v-card-text v-if="instance == 'Usuario'">
          <AdminFormCreateUser
            @closeDialog="close"
            @saveUser="close"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AdminFormCreateUser from '../forms/AdminFormCreateUser.vue'
import AdminFormCreateOrganization from '../forms/AdminFormCreateOrganization.vue'

export default {
  name: 'CreateNewInstanceButton',
  components: {
    AdminFormCreateUser,
    AdminFormCreateOrganization,
  },
  props: {
    instance: { type: String, default: '' },
  },
  data() {
    return {}
  },
}
</script>
