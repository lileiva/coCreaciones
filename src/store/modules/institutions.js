const localState = {
  institutions: [],
}
const mutations = {
  addInstitution(state, { institution }) {
    state.institutions = { ...state.institutions, [institution.id]: institution }
  },
}
const actions = {
  async fetchInstitutions({ dispatch, rootGetters }) {
    return rootGetters.instituionsDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchInstitution', { id: doc.id })
        })
      })
  },
  async fetchInstitution({ state, commit, rootGetters }, { id }) {
    if (state.instituions[id]) {
      return state.instituions[id]
    }
    return rootGetters.instituionsDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addInstitution', { institution: { ...doc.data(), id: doc.id } })
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
