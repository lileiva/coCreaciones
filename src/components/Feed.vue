<template>
  <div>
    <h1>Ofertas</h1>
    <br>
    <div class="columns">
      <div class="column">
        <Offer
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
import Offer from './Offer.vue'

export default {
  name: 'Feed',
  components: {
    Offer,
  },
  props: {
    offers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    //   offers: [],
    }
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
  },
  methods: {
    ...mapActions('users', [
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
