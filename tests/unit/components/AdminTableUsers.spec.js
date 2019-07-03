
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'

import AdminTableUsers from '../../../src/components/AdminTableUsers.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  createUser() { return null },
  deleteUser() { return null },
  async fetchUsers() {
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
        users: {
          1: {
            id: 1,
            name: 'seba',
            admin: true,
          },
        },
        currentUser: { admin: true, noConfirm: false },
      },
    },
  },
})

describe('AdminTableUsers', () => {
  const wrapper = shallowMount(AdminTableUsers, { localVue, store })

  it('renders the component, and it is a div with class "user-index"', () => {
    expect(wrapper.is('.user-index')).to.equal(true)
  })

  it('displays an user table', () => {
    expect(wrapper.find('.user-table').exists()).to.equal(true)
  })

  it('displays an empty warning', () => {
    expect(wrapper.find('.empty-warning').exists()).to.equal(true)
  })

  it('has users in state', () => {
    expect(wrapper.vm.users[1].admin).to.equal(true)
    expect(wrapper.vm.users[1].id).to.equal(1)
    expect(wrapper.vm.users[1].name).to.equal('seba')
  })
})
