const localState = {
  currentUser: {},
  validations: [],
}

const mutations = {
  addValidation(state, { validation }) {
    state.validations = { ...state.validations, [validation.id]: validation }
  },
}

const actions = {
  async fetchValidations({ dispatch, rootGetters }) {
    return rootGetters.validationsDB.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch('fetchValidation', { id: doc.id })
      })
    })
  },
  async fetchValidation({ state, commit, rootGetters }, { id }) {
    if (state.validations[id]) {
      return state.validations[id]
    }
    return rootGetters.validationsDB
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addValidation', { validation: { ...doc.data(), id: doc.id } })
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
