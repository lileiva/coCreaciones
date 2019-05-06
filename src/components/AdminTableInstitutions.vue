<template>
  <div>
    <v-card>
      <v-card-title>
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
          </td> -->
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

export default {
  name: 'AdminTableInstitutions',
  data() {
    return {
      selected: [],
      loading: true,
      search: '',
      dialog: false,
      editedIndex: -1,
      dialog2: false,
    }
  },
  computed: {
    headers() {
      return InstitutionsHeaders
    },
    items() {
      return Object.keys(this.institutions)
        .map(
          key => Object.assign({}, this.institutions[key]),
        )
    },
    ...mapState('institutions', [
      'institutions',
    ]),
  },
  created() {
    this.fetchInstitutions().then(() => {
      setTimeout(() => { this.loading = false }, 500)
    })
  },
  methods: {
    ...mapActions('institutions', [
      'fetchInstitutions',
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
  },
}
</script>


<style scoped>
.v-icon {
  display: inline-flex !important;
}
</style>
