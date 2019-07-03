<template>
  <div class="show">
    <div id="offer">
      <div class="show_content">
        <hr>
        <br>
        <h3 class="headline">
          <a
            class="linkDiscreto"
            :href="'/institutions/' + offer.institution_id"
          >{{ institution.name.toUpperCase() }}</a>
          - {{ offer.title }}
        </h3>
        <br>
        <hr>
        <br>
        <div>{{ offer.description }}</div>
        <br>
        <div>Horas semanales: {{ offer.hoursPerWeek }}</div>
        <br>
        <div>
          Contactar a
          <a :href="'mailto:' + offer.contactEmail">{{ offer.contactEmail }}</a>
        </div>
        <br>
        <div class="posted-info">
          Oferta subida el {{ new Date(new Date(1970, 0, 1).setSeconds(offer.posted)) }}
        </div>
      </div>
    </div>
    <h3>Otras ofertas de {{ institution.name }}</h3>
    <br>

    <div class="column">
      <OfferCard
        v-for="_offer in filteredInstitutions"
        :key="_offer.title"
        :offer="_offer"
        :institutions="institutions"
      />
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import OfferCard from '../components/OfferCard.vue'

export default {
  name: 'OfferShow',
  components: {
    OfferCard,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('institutions', ['institutions']),
    ...mapState('offers', ['offers']),
    offer() {
      return this.offers[this.$route.params.id]
    },
    institution() {
      return this.institutions[this.offer.institution_id] || {}
    },
    filteredInstitutions() {
      return Object.keys(this.offers).map(
        key => Object.assign({}, this.offers[key]),
      ).filter(
        o => o.id !== this.$route.params.id && o.institution_id === this.offer.institution_id,
      )
    },
  },
  created() {
    this.fetchInstitutions().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 500)
    })
    this.fetchOffers().then(async () => {
      setTimeout(async () => {
        this.loading = false
      }, 500)
    })
  },
  methods: {
    ...mapActions('institutions', ['fetchInstitutions']),
    ...mapActions('offers', ['fetchOffers']),
  },
}
</script>

<style scoped>
.posted-info {
  color: #555;
  text-align: right;
  padding: 25px;
}
.headline {
  text-align: center;
}
#offer {
  padding: 25px;
  /* background-color: blue; */
}
.show_content {
  padding: 15px;
  height: 40vh;
  /* background-color: #aaa; */
  border: black 1px solid;
}
.v-btn {
  min-width: 0;
  width: 33%;
}
.orgCard {
  margin-right: 3%;
}
.linkDiscreto {
  text-decoration: none;
  color: black;
}
.linkDiscreto:hover {
  color: #666;
}
</style>
