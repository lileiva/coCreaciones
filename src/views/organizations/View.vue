<template>
  <div class="show">
    <v-layout>
      <v-flex
        xs12
        sm3
      >
        <v-card>
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
              <br>
              <div> Aqui irían las etiquetas de la organización. </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { Organizations } from '../../data'

export default {
  name: 'OrganizationShow',
  data() {
    return {
      org: Organizations.filter(org => org.id === this.$route.params.id)[0],
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
    }
  },
}
</script>

<style scoped>
  .show_content {
    height: 50vh;
  }
</style>
