
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import Institutions from '../../../src/views/Institutions.vue'
import AdminTableInstitutions from '../../../src/components/AdminTableInstitutions.vue'

describe('Institutions', () => {
  it('renders the component, and it is a div with class "Home"', () => {
    // arrange
    const wrapper = shallowMount(Institutions)
    // expect
    expect(wrapper.is('div.home')).to.equal(true)
  })

  it('contains an AdminTableInstitution component', () => {
    // arrange
    const wrapper = shallowMount(Institutions)
    // expect
    expect(wrapper.find(AdminTableInstitutions).exists()).to.equal(true)
  })
})
