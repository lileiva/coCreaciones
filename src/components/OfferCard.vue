<template>
  <div class="offer">
    <v-card
      :to=" { name: 'OfferShow', params: { id: offer.id }}"
    >
      <v-card-title>
        <div>
          <span class="offerTitle">
            {{ institutions[offer.institution_id].name.toUpperCase() }}
            - {{ offer.title }}
          </span>
          <br>
          <span class="grey--text">{{ offer.description }}</span>
          <br>
          <span class="grey--text">Horas semanales: {{ offer.hoursPerWeek }}</span>
          <br>
          <span class="grey--text">
            Contactar a
            <a :href="'mailto:' + offer.contactEmail">{{ offer.contactEmail }}</a>
          </span>
        </div>
      </v-card-title>
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
    institutions: {
      type: Object,
      default: () => {},
    },
  },
  computed: {},
  created() {},
  methods: {},
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
.linkDiscreto {
  text-decoration: none;
  color: black;
}
</style>
