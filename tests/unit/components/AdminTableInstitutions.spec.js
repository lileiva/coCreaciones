
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import AdminTableInstitutions from '../../../src/components/AdminTableInstitutions.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  createInstitution() { return null },
  async fetchInstitutions() {
    return Promise.resolve(null)
  },
}

const store = new Vuex.Store({
  state: {
    currentUser: { admin: true },
  },
  modules: {
    institutions: {
      namespaced: true,
      actions,
      state: {
        institutions: {
          1: {
            description: 'desc1',
            id: '1',
            name: 'asd',
            profile_pic: '',
            size: 1,
          },
        },
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

describe('AdminTableInstitutions', () => {
  const wrapper = shallowMount(AdminTableInstitutions, { localVue, store })

  it('renders the component, and it is a div with class "institution-index"', () => {
    expect(wrapper.is('.institution-index')).to.equal(true)
  })

  it('displays an institution table', () => {
    expect(wrapper.find('.institution-table').exists()).to.equal(true)
  })

  it('displays an empty warning', () => {
    expect(wrapper.find('.empty-warning').exists()).to.equal(true)
  })

  it('has institutions in state', () => {
    expect(wrapper.vm.institutions[1].description).to.equal('desc1')
    expect(wrapper.vm.institutions[1].id).to.equal('1')
    expect(wrapper.vm.institutions[1].name).to.equal('asd')
    expect(wrapper.vm.institutions[1].profile_pic).to.equal('')
    expect(wrapper.vm.institutions[1].size).to.equal(1)
  })
})
