import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/institutions/',
      name: 'Institutions',
      component: () => import('./views/Institutions.vue'),
    },
    {
      path: '/users/:id',
      name: 'UserShow',
      component: () => import('./views/UserShow.vue'),
    },
    {
      path: '/institutions/:id',
      name: 'institutionShow',
      component: () => import('./views/Institution.vue'),
    },
    {
      path: '/offers',
      name: 'Offers',
      component: () => import('./views/Offers.vue'),
    },
    {
      path: '/offers/:id',
      name: 'OfferShow',
      component: () => import('./views/Offer.vue'),
    },
    {
      path: '/offers-create',
      name: 'OfferForm',
      component: () => import('./views/OfferForm.vue'),
    },
  ],
})
