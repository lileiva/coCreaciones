const localState = {
  institutions: {},
}
const mutations = {
  addInstitution(state, { institution }) {
    state.institutions = { ...state.institutions, [institution.id]: institution }
  },
}
const actions = {
  async fetchInstitutions({ dispatch, rootGetters }) {
    return rootGetters.institutionsDB.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch('fetchInstitution', { id: doc.id })
      })
    })
  },
  async createInstitution({ rootGetters, commit }, { institution }) {
    return rootGetters.institutionsDB.add(institution).then((doc) => {
      commit('addInstitution', { institution: { ...institution, id: doc.id } })
    })
  },
  async fetchInstitution({ state, commit, rootGetters }, { id }) {
    if (state.institutions[id]) {
      return state.institutions[id]
    }
    return rootGetters.institutionsDB
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addInstitution', { institution: { ...doc.data(), id: `${doc.id}` } })
        }
      })
  },
}

export default {
  namespaced: true,
  state: localState,
  mutations,
  actions,
}
