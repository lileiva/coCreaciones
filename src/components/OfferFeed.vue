<template>
  <div>
    <div class="columns">
      <div class="column">
        <OfferCard
          v-for="offer in offers"
          :key="offer.title"
          :offer="offer"
          :institutions="institutions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import OfferCard from './OfferCard.vue'

export default {
  name: 'OfferFeed',
  components: {
    OfferCard,
  },
  props: {
    offers: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState('offers', ['offers']),
    ...mapState('institutions', ['institutions']),
  },

  created() {
    this.fetchOffers().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 500)
    })
    this.fetchInstitutions().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 500)
    })
  },
  methods: {
    ...mapActions('offers', ["fetchOffers('this.institutionID')"]),
    ...mapActions('institutions', ['fetchInstitutions']),
    offersByInstitution(id) {
      const l = []
      this.offers.forEach((offer) => {
        if (offer.institution_id === id) {
          l.push(offer)
        }
      })
      return l
    },
  },
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
