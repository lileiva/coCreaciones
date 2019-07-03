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
    return rootGetters.offersDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchOffer', { id: doc.id })
        })
      })
  },
  async createOffer({ rootGetters, commit }, { offer }) {
    return rootGetters.offersDB.add(offer).then((doc) => {
      commit('addOffer', { offer: { ...offer, id: doc.id } })
    })
  },
  async fetchOffer({ state, commit, rootGetters }, { id }) {
    if (state.offers[id]) {
      return state.offers[id]
    }
    return rootGetters.offersDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addOffer', { offer: { ...doc.data(), id: `${doc.id}` } })
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
