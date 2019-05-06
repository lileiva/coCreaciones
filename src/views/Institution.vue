<template>
  <div class="show">
    <v-layout
      row
      wrap
    >
      <v-flex xs3>
        <v-card class="orgCard">
          <v-img
            :src="institution.logo"
            aspect-ratio="2.75"
          />

          <v-card-title primary-title>
            <div class="show_content">
              <h3 class="headline mb-0">
                {{ institution.name }}
              </h3>
              <br>
              <div> {{ institution.description }} </div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="orange"
              @click="toggleReviews"
            >
              Reviews
            </v-btn>
            <v-btn
              flat
              color="orange"
              @click="toggleProjects"
            >
              Proyectos
            </v-btn>
            <v-btn
              flat
              color="orange"
              @click="toggleMembers"
            >
              Miembros
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- <v-flex
        v-if="showMembers"
        xs9
      >
        <v-data-table
          :headers="userHeaders"
          :items="userSample"
          class="elevation-1"
        >
          <template v-slot:items="user">
            <td>{{ user.item.name }}</td>
            <td class="text-xs-center">
              {{ user.item.joined_at }}
            </td>
          </template>
        </v-data-table>
      </v-flex> -->

      <!-- <v-flex
        v-if="showReviews"
        xs9
      >
        <v-data-table
          :headers="reviewHeaders"
          :items="reviewSample"
          class="elevation-1"
        >
          <template v-slot:items="review">
            <td>{{ review.item.name }}</td>
            <td class="text-xs-center">
              {{ review.item.description }}
            </td>
            <td class="text-xs-center">
              {{ review.item.rate }}
            </td>
          </template>
        </v-data-table>
      </v-flex> -->

      <v-flex
        v-if="showProjects"
        xs9
      >
        <v-data-table
          :headers="offerHeaders"
          :items="projects"
          class="elevation-1"
        >
          <template v-slot:items="project">
            <td>{{ project.item.title }}</td>
            <td class="text-xs-center">
              {{ project.item.description }}
            </td>
            <td class="text-xs-center">
              {{ project.item.contactEmail }}
            </td>
            <td class="text-xs-center">
              {{ project.item.hoursPerWeek }}
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import { InstitutionOffertHeaders } from '../data'

export default {
  name: 'InstitutionShow',
  data() {
    return {
    //   showMembers: true,
      showReviews: false,
      showProjects: true,
    }
  },
  computed: {
    ...mapState('institutions', [
      'institutions',
    ]),
    ...mapState('offers', [
      'offers',
    ]),
    institution() {
      return this.institutions[+this.$route.params.id]
    },
    projects() {
      return this.items.filter(offer => +offer.institution_id === +this.institution.id)
    },
    offerHeaders() {
      return InstitutionOffertHeaders
    },
    items() {
      return Object.keys(this.offers)
        .map(
          key => Object.assign({}, this.offers[key]),
        )
    },
  },
  created() {
    this.fetchInstitutions().then(() => {
      setTimeout(() => { this.loading = false }, 500)
    })
    this.fetchOffers().then(() => {
      setTimeout(() => { this.loading = false }, 500)
    })
  },
  methods: {
    ...mapActions('institutions', [
      'fetchInstitutions',
    ]),
    ...mapActions('offers', [
      'fetchOffers',
    ]),
    toggleMembers(event) {
      if (event) {
        // this.$data.showMembers = true
        this.$data.showReviews = false
        this.$data.showProjects = false
      }
    },
    toggleReviews(event) {
      if (event) {
        // this.$data.showMembers = false
        this.$data.showReviews = true
        this.$data.showProjects = false
      }
    },
    toggleProjects(event) {
      if (event) {
        // this.$data.showMembers = false
        this.$data.showReviews = false
        this.$data.showProjects = true
      }
    },
  },
}
</script>

<style scoped>
  .show_content {
    height: 50vh;
  }
  .v-btn {
    min-width: 0;
    width: 33%;
  }
  .orgCard {
    margin-right: 3%
  }
</style>
