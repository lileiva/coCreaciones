import Vue from 'vue'

const localState = {
  currentUser: {},
  users: [],
}
const mutations = {
  setUser({ state }, { user }) {
    state.currentUser = user
  },
  addUser(state, { user }) {
    state.users = { ...state.users, [user.id]: user }
  },
  deleteUser(state, { user }) {
    if (state.users[user.nick]) {
      Vue.delete(state.users, user.nick)
    }
  },
}
const actions = {
  logout({ commit, rootState }) {
    rootState.auth.signOut()
    commit('setUser', { user: null })
  },
  async deleteUser({ commit, rootGetters }, { user }) {
    return rootGetters.usersDB.doc(user.nick).delete().then(() => {
      commit('deleteUser', { user })
    })
  },
  createUser({ commit, rootState, rootGetters }, { user }) {
    rootState.authCreate.createUserWithEmailAndPassword(user.email, user.password).then(
      () => {
        const newUser = { ...user, id: user.nick }
        delete newUser.password
        rootGetters.usersDB.doc(user.nick).set(newUser).then(() => {
        }).then(() => {
          commit('addUser', { user: newUser })
        })
      },
    )
  },
  async fetchUsers({ dispatch, rootGetters }) {
    return rootGetters.usersDB
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch('fetchUser', { id: doc.id })
        })
      })
  },
  async fetchUser({ state, commit, rootGetters }, { id }) {
    if (state.users[id]) {
      return state.users[id]
    }
    return rootGetters.usersDB.doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          commit('addUser', { user: { ...doc.data(), id: doc.id } })
        }
      })
  },
}

export default {
  namespaced: true,
  state: localState,
  mutations,
  actions,
  // getters,
}
