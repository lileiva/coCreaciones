<template>
  <div class="home">
    <h1>Ofertas</h1>
    <OfferFeed />
  </div>
</template>

<script>
import OfferFeed from '../components/OfferFeed.vue'

export default {
  name: 'Offer',
  components: {
    OfferFeed,
  },
}
</script>
