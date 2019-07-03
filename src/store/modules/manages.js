const localState = {
  manages: {},
}
const mutations = {
  addManage(state, { manage }) {
    state.manages = { ...state.manages, [manage.id]: manage }
  },
}
const actions = {
  async fetchManages({ dispatch, rootGetters }) {
    return rootGetters.managesDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchManage', { id: doc.id })
        })
      })
  },
  async fetchManage({ state, commit, rootGetters }, { id }) {
    if (state.manages[id]) {
      return state.manages[id]
    }
    return rootGetters.managesDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addManage', { manage: { ...doc.data(), id: `${doc.id}` } })
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
