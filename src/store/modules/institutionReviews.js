const localState = {
  reviews: [],
}
const mutations = {
  addReviews(state, { reviews }) {
    state.reviews = { ...state.reviews, reviews }
  },
}
const actions = {
  async fetchReviews({ state, commit, rootGetters }, { institutionId }) {
    if (state.reviews.length) {
      return state.reviews
    }
    return rootGetters.institutionsDB.doc(institutionId).collection('reviews')
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addReviews', { ...doc.data() })
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
