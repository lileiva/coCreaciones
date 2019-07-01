import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import users from './modules/users'
import institutions from './modules/institutions'
import manages from './modules/manages'
import offers from './modules/offers'
import people from './modules/people'
import validations from './modules/validations'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

Vue.use(Vuex)

const config = {
  apiKey: 'AIzaSyCukGbHCYIjK0Hxy-EY8uABHfIv9R0MvWk',
  authDomain: 'co-creaciones.firebaseapp.com',
  databaseURL: 'https://co-creaciones.firebaseio.com',
  projectId: 'co-creaciones',
  storageBucket: 'co-creaciones.appspot.com',
  messagingSenderId: '622148542503',
}

firebase.initializeApp(config)
const appForUsers = firebase.initializeApp(config, 'USERS')

export default new Vuex.Store({
  state: {
    app: firebase,
    db: firebase.firestore(),
    storage: firebase.storage(),
    auth: firebase.auth(),
    authCreate: appForUsers.auth(),
    currentUser: null,
  },
  getters: {
    usersDB: state => state.db.collection('users'),
    institutionsDB: state => state.db.collection('institutions'),
    managesDB: state => state.db.collection('manages'),
    offersDB: state => state.db.collection('offers'),
    peopleDB: state => state.db.collection('people'),
    validationsDB: state => state.db.collection('validations'),
  },
  mutations: {
    setUser(state, { user }) {
      state.currentUser = user
    },
  },
  actions: {
    singIn({ commit, getters, state }, { email, password }) {
      return getters.usersDB
        .where('email', '==', email)
        .limit(1)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((user) => {
            if (user) {
              state.auth.signInWithEmailAndPassword(email, password).then((authUser) => {
                const newUser = {
                  id: authUser.uid,
                  ...user.data(),
                }
                commit('setUser', { user: newUser })
              })
            }
          })
        })
    },
  },
  modules: {
    users,
    institutions,
    manages,
    offers,
    people,
    validations,
  },
})
