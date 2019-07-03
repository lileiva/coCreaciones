<template>
  <div class="home">
    <h1>Ofertas</h1>
    <OfferFeed />
    <h1>Crea una nueva oferta</h1>
    <OfferForm />
  </div>
</template>

<script>
import OfferFeed from '../components/OfferFeed.vue'
import OfferForm from '../components/OfferForm.vue'

export default {
  name: 'Offer',
  components: {
    OfferFeed,
    OfferForm,
  },
}
</script>
