
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import Offer from '../../../src/views/Offer.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  async fetchInstitutions() { return Promise.resolve({ value: true }) },
  async fetchOffers() { return Promise.resolve({ value: true }) },
}

const store = new Vuex.Store({
  modules: {
    institutions: {
      namespaced: true,
      actions,
      state: {
        institutions: [{ name: 'placeholderName', logo: null }],
      },
    },
    offers: {
      namespaced: true,
      actions,
      state: {
        offers: [{
          title: null,
          hoursPerWeek: null,
          contactEmail: null,
          institution_id: null,
          description: null,
          posted: new Date(),
        }],
      },
    },
  },
})

const $route = {
  params: {
    id: 0,
  },
}

describe('Offer', () => {
  it('renders the component, and it is a div with class "show", within it a div with id offer', () => {
    const wrapper = shallowMount(Offer, { localVue, store, mocks: { $route } })
    expect(wrapper.is('div.show')).to.equal(true)
    expect(wrapper.find('div.show div#offer').exists()).to.equal(true)
  })

  it('contains an offercard, that summarises de offer', () => {
    const wrapper = shallowMount(Offer, { localVue, store, mocks: { $route } })
    expect(wrapper.find('.column').exists()).to.equal(true)
  })
})
