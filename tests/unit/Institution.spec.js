
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import Institution from '../../src/views/Institution.vue'

// add the 2 lines below
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
        institutions: [{ logo: null }],
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

const $route = {
  params: {
    id: 0,
  },
}

describe('Institution', () => {
  it('renders the component, and it is a div with class "show"', () => {
    const wrapper = shallowMount(Institution, { localVue, store, mocks: { $route } })
    expect(wrapper.is('div.show')).to.equal(true)
  })

  it('contains an orgCard, that summarises de institution', () => {
    const wrapper = shallowMount(Institution, { localVue, store, mocks: { $route } })
    expect(wrapper.find('.orgCard').exists()).to.equal(true)
  })

  it('contains a users, reviews, and projects tables', () => {
    const wrapper = shallowMount(Institution, { localVue, store, mocks: { $route } })
    expect(wrapper.find('.contentTable').exists()).to.equal(true)
  })
})
