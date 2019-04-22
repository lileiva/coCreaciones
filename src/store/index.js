import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import users from './modules/users'
import institutions from './modules/institutions'
import manages from './modules/manages'
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
    currentExecution: null,
  },
  getters: {
    usersDB: state => state.db.collection('users'),
    institutionsDB: state => state.db.collection('institutions'),
    managesDB: state => state.db.collection('manages'),
  },
  mutations: {
    setCurrentExecution(state, { execution }) {
      state.currentExecution = execution
    },
  },
  actions: {

  },
  modules: {
    users,
    institutions,
    manages,
  },
})
