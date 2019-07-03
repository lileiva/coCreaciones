<template>
  <form @submit.prevent="handleSubmit">
    <v-select
      v-model="institution_id"
      :items="instituciones"
      :menu-props="{ maxHeight: '400' }"
      label="Institucion"
      hint="Selecciona la organizacion"
    />
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="60"
      label="Título"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    />
    <v-text-field
      v-model="description"
      :error-messages="descriptionErrors"
      label="Descripción"
      required
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
    />
    <v-text-field
      v-model="hoursPerWeek"
      :error-messages="hoursPerWeekErrors"
      type="number"
      label="Horas semanales"
      required
      @input="$v.hoursPerWeek.$touch()"
      @blur="$v.hoursPerWeek.$touch()"
    />
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail encargado"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />
    <v-btn
      type="submit"
      class="cbutton"
    >
      crear
    </v-btn>
    <v-btn
      class="cbutton"
      @click="clear"
    >
      borrar
    </v-btn>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(60) },
    email: { required, email },
    description: { required },
    hoursPerWeek: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      },
    },
  },

  data: () => ({
    // currentUser: {
    //   id: 4,
    //   institutionManaged: 1,
    //   name: "Rodrigo"
    // },
    institution_id: '',
    name: '',
    email: '',
    description: '',
    hoursPerWeek: null,
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  computed: {
    ...mapState(['currentUser']),
    ...mapState('manages', ['manages']),
    ...mapState('institutions', ['institutions']),
    ...mapState('offers', ['offers']),
    instituciones() {
      if (!this.manages || !this.institutions) return []
      const manages = Object.keys(this.manages)
        .map(k => this.manages[k])
        .filter(m => m.user_id === this.currentUser.id)
      return manages.map(m => ({
        text: this.institutions[m.institution_id].name,
        value: m.institution_id,
      }))
    },
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      if (!this.$v.checkbox.checked) {
        errors.push('You must agree to continue!')
      }
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      if (!this.$v.select.required) {
        errors.push('Item is required')
      }
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      if (!this.$v.name.maxLength) {
        errors.push('Título a lo más 60 caracteres de largo.')
      }
      if (!this.$v.name.required) {
        errors.push('Título es obligatorio.')
      }
      return errors
    },
    descriptionErrors() {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      if (!this.$v.description.required) {
        errors.push('Descripción es obligatoria.')
      }
      return errors
    },
    hoursPerWeekErrors() {
      const errors = []
      if (!this.$v.hoursPerWeek.$dirty) return errors
      if (!this.$v.hoursPerWeek.required) {
        errors.push('Horas semanales es obligatorio.')
      }
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      if (!this.$v.email.email) {
        errors.push('Debe ser e-mail válido')
      }
      if (!this.$v.email.required) {
        errors.push('E-mail es obligatorio')
      }
      return errors
    },
  },
  created() {
    this.fetchManages().then(() => {
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
    ...mapActions('manages', ['fetchManages']),
    ...mapActions('institutions', ['fetchInstitutions']),
    ...mapActions('offers', ['createOffer']),
    handleSubmit() {
      this.createOffer({
        offer: {
          institution_id: this.institution_id,
          name: this.name,
          email: this.email,
          description: this.description,
          hoursPerWeek: this.hoursPerWeek,
        },
      })
      this.clear()
      // maybe send some alert or something
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.description = ''
      this.hoursPerWeek = null
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
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
.cbutton {
  background-color: #282262 !important;
}
</style>
