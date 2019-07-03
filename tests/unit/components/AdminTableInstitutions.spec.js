
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { expect, done } from 'chai'
import Vuex from 'vuex'

import AdminTableInstitutions from '../../../src/components/AdminTableInstitutions.vue'

// add the 2 lines below
const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  async fetchInstitutions() {
    return Promise.resolve({
      0: {
        id: '0',
        name: 'dummyname',
        description: 'dummydesc',
        logo: 'dummylogo',
        members: 'dummymembers',
      },
    })
  },
}

const store = new Vuex.Store({
  modules: {
    institutions: {
      namespaced: true,
      actions,
      state: {
        institutions: {
          0: {
            id: '0',
            name: 'dummyname',
            description: 'dummydesc',
            logo: 'dummylogo',
            members: 'dummymembers',
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

  it('displays the following content: "Nombre", "Descripcion", "Logo", "Miembros"', () => {
    console.log(wrapper.items)
    const nombreInst = wrapper.find('.institution-name')
    const descripcionInst = wrapper.find('.institution-description')
    const logoInst = wrapper.find('.institution-logo')
    const miembrosInst = wrapper.find('.institution-members')
    expect(nombreInst.exists()).to.equal(true)
    expect(descripcionInst.exists()).to.equal(true)
    expect(logoInst.exists()).to.equal(true)
    expect(miembrosInst.exists()).to.equal(true)
    done()
  })
})
