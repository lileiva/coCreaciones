<template>
  <div class="offer">
    <v-card>
      <v-card-title>
        <div>
          <span class="offerTitle"><a
            href="#"
            class="offerInstitutionLink"
          > {{ offer.institutionName }}</a> - {{ offer.title }}</span><br>
          <span class="grey--text">{{ offer.description }}</span><br>
          <span class="grey--text">Horas semanales: {{ offer.hoursPerWeek }}</span><br>
          <span class="grey--text">Contactar a {{ offer.contactEmail }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          flat
          color="orange"
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'OfferCard',
  props: {
    offer: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
  },
  created() {
  },
  methods: {
  },
}
</script>
<style scoped>
  .offerTitle {
      font-size: 24px;
  }
  .offerInstitutionLink {
      text-decoration: none;
      color: black;
  }
</style>
