import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import AdminFormCreateOrganization from '../../src/components/AdminFormCreateInstitutions.vue'

describe('Institutions', () => {
  it('contains an AdminFormCreateOrganization component', () => {
    // arrange
    const wrapper = shallowMount(AdminFormCreateOrganization)
    wrapper.setData({
      valid: true,
      organization: {
        name: '',
        description: '',
        logo: '',
        members: '',
      },
      drawer: null,
      show1: false,
    })
    // expect
    expect(wrapper.find(AdminFormCreateOrganization).exists()).to.equal(true)
  })

  it('contains a form', () => {
    const wrapper = shallowMount(AdminFormCreateOrganization)
    wrapper.setData({
      valid: true,
      organization: {
        name: '',
        description: '',
        logo: '',
        members: '',
      },
      drawer: null,
      show1: false,
    })
    expect(wrapper.find('.form').exists()).to.equal(true)
  })
})
