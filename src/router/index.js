import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tariff from '@/views/Tariff'
import Law from '@/views/Law'
import Helpers from '@/views/Helpers'
import Road from '@/views/Road'
import Privacy from '@/views/Privacy'
import PostalCode from '@/views/Postal_code'
import Sign from '@/views/Sign/Sign'
import FormSigns from '@/views/Sign/Form_signs'
import InstallIOS from '@/views/instal_iOS'
import PointsCalc from '@/views/Points_Calc'
import QualificationsAccident2 from '@/views/Qualifications_Accident2'
import TypeAccident from '@/views/Type_Accident'
import ControlList from '@/views/ControlList'
import DrivingLicence from '@/views/Driving_Licence'
import DrivingLicenceCode from '@/views/Driving_Licence_Code'
import DocumentHolding from '@/views/Document_holding'
import KSIPCode from '@/views/KSIPcode'
import SignDetails from '@/views/Sign/SignDetails'
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
    path: '/postal_code',
    name: 'PostalCode',
    component: PostalCode
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/FormSigns/:sign_category',
    name: 'FormSigns',
    component: FormSigns
  },
  {
    path: '/Install_iOS/',
    name: 'Install_iOS',
    component: InstallIOS
  },
  {
    path: '/Points_Calc/',
    name: 'Points_Calc',
    component: PointsCalc
  },
  {
    path: '/TypeAccident/',
    name: 'TypeAccident',
    component: TypeAccident
  },
  {
    path: '/QualificationsAccident2/:step',
    name: 'QualificationsAccident2',
    component: QualificationsAccident2
  },
  {
    path: '/ControlList/',
    name: 'ControlList',
    component: ControlList
  },
  {
    path: '/DrivingLicence/',
    name: 'DrivingLicence',
    component: DrivingLicence
  },
  {
    path: '/DrivingLicenceCode/',
    name: 'DrivingLicenceCode',
    component: DrivingLicenceCode
  },
  {
    path: '/DocumentHolding/',
    name: 'DocumentHolding',
    component: DocumentHolding
  },
  {
    path: '/KSIPCode/',
    name: 'KSIPCode',
    component: KSIPCode
  },
  {
    path: '/SignDetails/:sign_category/:sign_name/:tariffId',
    name: 'SignDetails',
    component: SignDetails
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
  if (from.path === '/tariff/' && to.path !== '/tariff/') {
    router.app.$store.state.selected_tariff_data.search_text = ''
    router.app.$store.state.selected_tariff_data.options_category = 'all'
    next()
  } else {
    next()
  }
})
const DEFAULT_TITLE = 'TaPo24'
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
