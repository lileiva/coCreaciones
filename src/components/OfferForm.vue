<template>
  <!-- @submit="submitOffer" -->
  <form>
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
    <!-- <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>-->
    <!-- <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>-->

    <v-btn @click="submit">
      crear
    </v-btn>
    <v-btn @click="clear">
      borrar
    </v-btn>
  </form>
</template>

<script>
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
    name: '',
    email: '',
    description: '',
    hoursPerWeek: null,
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  computed: {
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

  methods: {
    submit() {
      this.$v.$touch()
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
</style>
