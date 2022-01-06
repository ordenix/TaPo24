import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tariff from '@/views/Tariff'
import Law from '@/views/Law'
import Helpers from '@/views/Helpers'
import Road from '@/views/Road'
import Privacy from '@/views/Privacy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tariff',
    name: 'Tariff',
    component: Tariff
  },
  {
    path: '/helpers',
    name: 'Helpers',
    component: Helpers
  },
  {
    path: '/road',
    name: 'Road',
    component: Road
  },
  {
    path: '/law',
    name: 'Law',
    component: Law
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (from.path === '/tarrif/' && to.path !== '/tarrif/') {
    this.$store.state.selected_tariff_data.search_text = ''
    this.$store.state.selected_tariff_data.options_category = 'all'
    next()
  } else {
    next()
  }
})
const DEFAULT_TITLE = 'TaPo24'
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
