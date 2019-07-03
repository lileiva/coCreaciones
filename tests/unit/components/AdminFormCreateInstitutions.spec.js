
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import AdminFormCreateInstitution from '../../../src/components/AdminFormCreateInstitutions.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
}

const store = new Vuex.Store({
  state: {
    currentUser: { admin: true },
    institution: {
      name: '',
      description: '',
      logo: '',
    },
  },
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

describe('AdminFormCreateInstitution', () => {
  const wrapper = shallowMount(AdminFormCreateInstitution, { localVue, store, mocks: { $route } })
  it('renders the component, and it is a div with class "institution-form"', () => {
    expect(wrapper.is('.institution-form')).to.equal(true)
    expect(wrapper.find('.create-form').exists()).to.equal(true)
  })

  it('constains all form inputs: "Nombre", "Descripcion", "Logo", "Miembros"', () => {
    const nombreInput = wrapper.find('[label="Nombre"]')
    const descripcionInput = wrapper.find('[label="Descripción"]')
    const logoInput = wrapper.find('[label="Logo"]')
    const miembrosInput = wrapper.find('[label="Miembros"]')
    expect(nombreInput.text()).to.equal('')
    expect(descripcionInput.text()).to.equal('')
    expect(logoInput.text()).to.equal('')
    expect(miembrosInput.text()).to.equal('')
  })

  it('Triggers an event when submitted', () => {
    const btn = wrapper.find('.sbm-btn')
    expect(btn.exists()).to.equal(true)
    btn.vm.$emit('click', '$event')
    expect(btn.emitted().click.length).to.equal(1)
  })
})
