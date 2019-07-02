import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import es from 'vuetify/es5/locale/es'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Vuetify, {
  lang: {
    locales: { es },
    current: 'es',
  },
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
