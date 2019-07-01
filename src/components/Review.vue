
<template>
  <div class="validation">
    <v-card>
      <v-card-title>
        <div>
          <p>
            <b>{{ validation.rate }}/5</b>
            - {{ validation.description }}
          </p>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Review',
  props: {
    validation: {
      type: Object,
      default: () => {},
    },
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
.validationTitle {
  font-size: 24px;
}
.validationInstitutionLink {
  text-decoration: none;
  color: black;
}
.linkDiscreto {
  text-decoration: none;
  color: black;
}
</style>
