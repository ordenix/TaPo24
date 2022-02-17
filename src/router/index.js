import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainPage/Home.vue'
import Tariff from '@/views/MainPage/Tariff'
import Law from '@/views/MainPage/Law'
import Helpers from '@/views/MainPage/Helpers'
import Road from '@/views/MainPage/Road'
import Privacy from '@/views/MainPage/Privacy'
import PostalCode from '@/views/HelpersModule/Postal_code'
import Sign from '@/views/Sign/Sign'
import FormSigns from '@/views/Sign/Form_signs'
import InstallIOS from '@/views/MainPage/instal_iOS'
import PointsCalc from '@/views/HelpersModule/Points_Calc'
import QualificationsAccident2 from '@/views/RoadsModule/Qualifications_Accident2'
import TypeAccident from '@/views/RoadsModule/Type_Accident'
import ControlList from '@/views/RoadsModule/ControlList'
import DrivingLicence from '@/views/RoadsModule/Driving_Licence'
import DrivingLicenceCode from '@/views/RoadsModule/Driving_Licence_Code'
import DocumentHolding from '@/views/RoadsModule/Document_holding'
import KSIPCode from '@/views/RoadsModule/KSIPcode'
import SignDetails from '@/views/Sign/SignDetails'
import Lights from '@/views/RoadsModule/Lights'
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
    path: '/Lights/',
    name: 'Lights',
    component: Lights
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/About.vue')
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
