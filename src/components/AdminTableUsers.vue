<template>
  <div>
    <v-card>
      <v-card-title>
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
            Crear Usuario
          </v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Nuevo usuario</span>
            </v-card-title>

            <v-card-text>
              <AdminFormCreateUser
                @closeDialog="close"
                @saveUser="close"
              />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-spacer /><v-spacer />
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
            {{ props.item.nick }}
          </td>
          <td class="text-xs-center">
            {{ props.item.email }}
          </td>
          <td class="text-xs-center">
            {{ props.item.company }}
          </td>
          <td class="text-xs-center">
            {{ props.item.role }}
          </td>
          <td
            slot="activator"
            class="justify-center layout px-0"
          >
            <v-icon
              small
              @click="del(props.item)"
            >
              delete
            </v-icon>
          </td>
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
    <v-dialog
      v-if="!currentUser.noConfirm"
      v-model="dialog2"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          ¿Seguro/a Que quieres eliminar este Usuario?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green
            darken-1"
            flat
            @click="deleteS(props.item)"
          >
            Sí
          </v-btn>
          <v-btn
            color="green
            darken-1"
            flat
            @click="dialog2 = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AdminFormCreateUser from './AdminFormCreateUser.vue'
import { UserHeaders } from '../data'

export default {
  name: 'AdminTableSamples',
  components: {
    AdminFormCreateUser,
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
        nick: '',
        email: '',
        company: '',
        password: '',
        isAdmin: false,
      },
      defaultItem: {
        nick: '',
        email: '',
        company: '',
        password: '',
        isAdmin: false,
      },
    }
  },
  computed: {
    headers() {
      return UserHeaders
    },
    items() {
      return Object.keys(this.users)
        .map(
          key => Object.assign({}, this.users[key]),
        )
    },
    ...mapState('users', [
      'users',
      'currentUser',
    ]),
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.close()
      }
    },
  },
  created() {
    this.fetchUsers().then(() => {
      setTimeout(() => { this.loading = false }, 500)
    })
  },
  methods: {
    ...mapActions('users', [
      'fetchUsers',
      'deleteUser',
    ]),
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      }, 300)
    },
    del(user) {
      this.itemToDelete = user
      this.dialog2 = true
    },
    deleteS() {
      this.dialog2 = false
      this.deleteUser({ user: { ...this.users[this.itemToDelete.nick] } })
    },
  },
}
</script>

<style scoped>
.v-icon {
  display: inline-flex !important;
}
</style>
