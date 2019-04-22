const localState = {
  manages: [],
}
const mutations = {
  addManage(state, { manage }) {
    state.manages = { ...state.manages, [manage.id]: manage }
  },
}
const actions = {
  async fetchManages({ dispatch, rootGetters }) {
    return rootGetters.instituionsDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchManage', { id: doc.id })
        })
      })
  },
  async fetchManage({ state, commit, rootGetters }, { id }) {
    if (state.instituions[id]) {
      return state.instituions[id]
    }
    return rootGetters.instituionsDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addManage', { manage: { ...doc.data(), id: doc.id } })
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
