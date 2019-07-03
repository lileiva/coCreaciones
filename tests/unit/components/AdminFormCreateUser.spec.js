
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import AdminFormCreateUser from '../../../src/components/AdminFormCreateUser.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
}

const store = new Vuex.Store({
  modules: {
    institutions: {
      namespaced: true,
      actions,
      state: {
        institutions: [{}],
      },
    },
    offers: {
      namespaced: true,
      actions,
      state: {
        offers: [{}],
      },
    },
  },
})

const $route = {}

describe('AdminFormCreateUser', () => {
  it('renders the component, and it is a div with class "user-form"', () => {
    const wrapper = shallowMount(AdminFormCreateUser, { localVue, store, mocks: { $route } })
    expect(wrapper.is('.user-form')).to.equal(true)
  })

  it('constains all form inputs: "Email", "Nombre", "Grado", "CV", "Admin", "Password"', () => {
    const wrapper = shallowMount(AdminFormCreateUser, { localVue, store, mocks: { $route } })
    const emailInput = wrapper.find('[label="Ingresar email"]')
    const nombreInput = wrapper.find('[label="Ingresar nombre"]')
    const gradoInput = wrapper.find('[label="Ingresar grado academico"]')
    const cvInput = wrapper.find('[label="Ingresar cvs"]')
    const adminInput = wrapper.find('[label="Es admin?"]')
    expect(emailInput.text()).to.equal('')
    expect(gradoInput.text()).to.equal('')
    expect(nombreInput.text()).to.equal('')
    expect(cvInput.text()).to.equal('')
    expect(adminInput.text()).to.equal('')
  })

  it('Triggers an event when submitted', () => {
    const wrapper = shallowMount(AdminFormCreateUser, { localVue, store, mocks: { $route } })
    const btn = wrapper.find('.sbm-btn')
    expect(btn.exists()).to.equal(true)
    btn.vm.$emit('click', '$event')
    expect(btn.emitted().click.length).to.equal(1)
  })
})
