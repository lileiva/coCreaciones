
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import OfferForm from '../../../src/components/OfferForm.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  async fetchInstitutions() {
    return Promise.resolve(null)
  },
  async fetchOffers() {
    return Promise.resolve(null)
  },
}

const store = new Vuex.Store({
  state: {
  },
  modules: {
    users: {
      namespaced: true,
      actions,
      state: {
        currentUser: { admin: true },
      },
    },
  },
})

describe('OfferForm', () => {
  const wrapper = shallowMount(OfferForm, { localVue, store })

  it('renders the component, and it is a form with class "offer-form"', () => {
    expect(wrapper.is('.offer-form')).to.equal(true)
  })

  it('Triggers an event when submitted', () => {
    const btn = wrapper.find('.sbm-btn')
    expect(btn.exists()).to.equal(true)
    btn.vm.$emit('click', '$event')
    expect(btn.emitted().click.length).to.equal(1)
  })
})
