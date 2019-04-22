const localState = {
  offers: [],
}
const mutations = {
  addOffer(state, { offer }) {
    state.offers = { ...state.offers, [offer.id]: offer }
  },
}
const actions = {
  async fetchOffers({ dispatch, rootGetters }) {
    return rootGetters.instituionsDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchOffer', { id: doc.id })
        })
      })
  },
  async fetchOffer({ state, commit, rootGetters }, { id }) {
    if (state.instituions[id]) {
      return state.instituions[id]
    }
    return rootGetters.instituionsDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addOffer', { offer: { ...doc.data(), id: doc.id } })
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
