
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import OfferFeed from '../../../src/components/OfferFeed.vue'

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
    offers: {
      namespaced: true,
      actions,
      state: {
        offers: {},
      },
    },
    institutions: {
      namespaced: true,
      actions,
      state: {
        institutions: {},
      },
    },
  },
})

describe('OfferFeed', () => {
  const wrapper = shallowMount(OfferFeed, { localVue, store })

  it('renders the component, and it is a div with class "offer-feed"', () => {
    expect(wrapper.is('.offer-feed')).to.equal(true)
  })
})
