<template>
  <div>
    <v-card>
      <v-card-title>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-btn
            v-if="currentUser.admin"
            slot="activator"
            color="#282262"
            class="mb-2"
          >
            Crear Organización
          </v-btn>

          <v-card>
            <v-card-title>
              <span class="headline">Nueva organización</span>
            </v-card-title>

            <v-card-text>
              <AdminFormCreateOrganization
                :login="false"
                @closeDialog="close"
                @saveUser="close"
              />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-spacer />
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1 text-xs-center"
        :loading="loading"
        item-key="id"
        :search="search"
      >
        <v-progress-linear
          slot="progress"
          color="blue"
          indeterminate
        />
        <template
          slot="items"
          slot-scope="props"
        >
          <td class="text-xs-center">
            <router-link
              :to="{ path: 'institutions/'+props.item.id+'',
                     params: { id: props.item.id }}"
            >
              {{ props.item.name }}
            </router-link>
          </td>
          <td class="text-xs-center">
            {{ props.item.description }}
          </td>
          <td class="text-xs-center">
            {{ props.item.logo }}
          </td>
          <td class="text-xs-center">
            {{ props.item.members }}
          </td>
          <!-- <td
            slot="activator"
            class="justify-center layout px-0"
          >
            <v-icon
              small
              @click="del(props.item)"
            >
              delete
            </v-icon>
          </td>-->
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >
          Su busqueda "{{ search }}" No tiene resultados.
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { InstitutionsHeaders } from '../data'
import AdminFormCreateOrganization from './AdminFormCreateInstitutions.vue'

export default {
  name: 'AdminTableInstitutions',
  components: {
    AdminFormCreateOrganization,
  },
  data() {
    return {
      selected: [],
      loading: true,
      search: '',
      dialog: false,
      editedIndex: -1,
      dialog2: false,
      itemToDelete: null,
      editedItem: {
        name: '',
        description: '',
        logo: '',
        members: '',
      },
      defaultItem: {
        name: '',
        description: '',
        logo: '',
        members: '',
      },
    }
  },
  computed: {
    headers() {
      return InstitutionsHeaders
    },
    items() {
      return Object.keys(this.institutions).map(key => Object.assign({}, this.institutions[key]))
    },
    ...mapState('institutions', ['institutions']),
    ...mapState(['currentUser']),
  },

  watch: {
    dialog(val) {
      if (!val) {
        this.close()
      }
    },
  },
  created() {
    this.fetchInstitutions().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 500)
    })
  },
  methods: {
    ...mapActions('institutions', ['fetchInstitutions']),
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },
    del(organization) {
      this.itemToDelete = organization
      this.dialog2 = true
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      }, 300)
    },
  },
}
</script>


<style scoped>
a:link {
  color: #282262;
  text-decoration: none;
}

a:visited {
  color: #282262;
  text-decoration: none;
}

.v-icon {
  display: inline-flex !important;
}
</style>
