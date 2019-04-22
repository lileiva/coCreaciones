<template>
  <div>
    <v-card>
      <v-card-title>
        <CreateInstanceButton instance="Organización" />
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
              :to="{ path: 'organization/'+props.item.id+'',
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
  </div>
</template>

<script>
import { OrganizationHeaders, Organizations } from '../../data'
import CreateInstanceButton from '../common_components/CreateInstanceButton.vue'

export default {
  name: 'AdminTableOrganizationSamples',
  components: {
    CreateInstanceButton,
  },
  data() {
    return {
    }
  },
  computed: {
    headers() {
      return OrganizationHeaders
    },
    items() {
      return Organizations
    },
  },
}
</script>

<!-- Usando !important ? Really? xD -->
<style scoped>
.v-icon {
  display: inline-flex !important;
}
</style>
