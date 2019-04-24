<template>
  <div class="show">
    <v-layout
      row
      wrap
    >
      <v-flex xs3>
        <v-card class="orgCard">
          <v-img
            :src="org.logo"
            aspect-ratio="2.75"
          />

          <v-card-title primary-title>
            <div class="show_content">
              <h3 class="headline mb-0">
                {{ org.name }}
              </h3>
              <br>
              <div> {{ org.description }} </div>
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

      <v-flex
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
      </v-flex>

      <v-flex
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
      </v-flex>

      <v-flex
        v-if="showProjects"
        xs9
      >
        <v-data-table
          :headers="projectHeaders"
          :items="projectSample"
          class="elevation-1"
        >
          <template v-slot:items="project">
            <td>{{ project.item.title }}</td>
            <td class="text-xs-center">
              {{ project.item.description }}
            </td>
            <td class="text-xs-center">
              {{ project.item.contact }}
            </td>
            <td class="text-xs-center">
              {{ project.item.hours }}
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import {
  Organizations, OrganizationUserHeaders, OrganizationUserSamples, OrganizationReviewHeaders,
  OrganizationReviewSamples, OrganizationProjectHeaders, OrganizationProjectSamples,
} from '../../data'


export default {
  name: 'OrganizationShow',
  data() {
    return {
      org: Organizations.find(org => org.id === (parseInt(this.$route.params.id, 10))),
      userHeaders: OrganizationUserHeaders,
      userSample: OrganizationUserSamples,
      reviewHeaders: OrganizationReviewHeaders,
      reviewSample: OrganizationReviewSamples,
      projectHeaders: OrganizationProjectHeaders,
      projectSample: OrganizationProjectSamples,
      showMembers: true,
      showReviews: false,
      showProjects: false,
    }
  },
  methods: {
    toggleMembers(event) {
      if (event) {
        this.$data.showMembers = true
        this.$data.showReviews = false
        this.$data.showProjects = false
      }
    },
    toggleReviews(event) {
      if (event) {
        this.$data.showMembers = false
        this.$data.showReviews = true
        this.$data.showProjects = false
      }
    },
    toggleProjects(event) {
      if (event) {
        this.$data.showMembers = false
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
