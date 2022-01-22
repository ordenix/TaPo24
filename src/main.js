import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Import Bootstrap an BootstrapVue CSS files (order is important)
Vue.config.productionTip = false
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  created () {
    const favoritesData = localStorage.getItem('favorites_array')
    if (favoritesData) {
      const favorites = JSON.parse(favoritesData)
      this.$store.commit('SET_FAVORITES', favorites)
    }
  },
  render: h => h(App)
}).$mount('#app')
