<template>
  <div>
    <h1>Crea tu nueva oferta</h1>
    <br>
    <OfferForm />
  </div>
</template>


<script>
// import { mapState, mapActions } from 'vuex'
import OfferForm from '../components/OfferForm.vue'

export default {
  name: 'OfferCreate',
  components: {
    OfferForm,
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
}
</script>

<style scoped>
</style>
