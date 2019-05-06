<template>
  <div>
    <h1>Ofertas</h1>
    <br>
    <div class="columns">
      <div class="column">
        <OfferCard
          v-for="offer in offers"
          :key="offer.title"
          :offer="offer"
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
    items() {
      return Object.keys(this.offers)
        .map(
          key => Object.assign({}, this.offers[key]),
        )
    },
    ...mapState('offers', [
      'offers',
    ]),
  },
  created() {
    this.fetchOffers().then(() => {
      setTimeout(() => { this.loading = false }, 500)
    })
  },
  methods: {
    ...mapActions('offers', [
      'fetchOffers',
    ]),
  },
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
