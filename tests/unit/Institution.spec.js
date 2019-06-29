
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'
import Institution from '../../src/views/Institution.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Institution', () => {
  const store = new Vuex.Store({
    state: {},
  })
  it('renders the component, and it is a div with class "show"', () => {
    const wrapper = shallowMount(Institution, { localVue, store })
    expect(wrapper.is('div.show')).to.equal(true)
  })

  it('contains an orgCard, that summarises de institution', () => {
    const wrapper = shallowMount(Institution)
    expect(wrapper.find('.orgCard').exists()).to.equal(true)
  })

  it('contains a users, reviews, and projects tables', () => {
    const wrapper = shallowMount(Institution)
    expect(wrapper.find('.usersTable').exists()).to.equal(true)
    expect(wrapper.find('.reviewsTable').exists()).to.equal(true)
    expect(wrapper.find('.projectsTable').exists()).to.equal(true)
  })
})
