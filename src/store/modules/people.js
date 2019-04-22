const localState = {
  people: [],
}
const mutations = {
  addPerson(state, { person }) {
    state.people = { ...state.people, [person.id]: person }
  },
}
const actions = {
  async fetchPeople({ dispatch, rootGetters }) {
    return rootGetters.instituionsDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchPerson', { id: doc.id })
        })
      })
  },
  async fetchPerson({ state, commit, rootGetters }, { id }) {
    if (state.instituions[id]) {
      return state.instituions[id]
    }
    return rootGetters.instituionsDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addPerson', { person: { ...doc.data(), id: doc.id } })
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
