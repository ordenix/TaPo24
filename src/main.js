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
import axios from 'axios'

// Import Bootstrap an BootstrapVue CSS files (order is important)
Vue.config.productionTip = false
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.mixin({
  data () {
    return {
      payload: {
        moduleName: null
      }
    }
  },
  methods: {
    globalGoTo: function (path, moduleName, type) {
      if (moduleName !== null) {
        if (navigator.onLine) {
          const headers = {
            'Content-Type': 'application/json'
          }
          this.payload.moduleName = moduleName
          axios
            .post(this.$store.state.path_api + '/module_clicked', this.payload, { headers })
        } else {
          this.$store.commit('ADD_TO_OFFLINE_STACK_MODULE_NAME', moduleName)
        }
      }
      if (type === 'web') {
        window.open(path)
      } else {
        if (navigator.onLine) {
          this.vcs()
        }
        this.$router.push({ path: path })
      }
    },
    // TODO: add force update and force date
    vcs: function () {
      const headers = {
        'Content-Type': 'application/json'
      }
      axios
        .get(this.$store.state.path_api + '/installation/get_last_versions', { headers })
        .then(response => {
          if (this.$store.state.version !== response.data.version_number) {
            if (response.data.force_update === true) {
              alert('Na serwerze produkcyjnym znaleziono nowszą wersję aplikacji, która jest wdrożona automatycznie. Nastąpi restart aplikacji')
              setTimeout(this.force_update, 3000)
            } else {
              if (response.data.date_force_update === 0) {
                if (this.$store.state.alert_show === false) {
                  alert('Na serwerze produkcyjnym znaleziono nowszą wersję aplikacji, aby ją pobrać zrestartuj aplikację (zakończ działanie aplikacji w tle)')
                  this.$store.state.alert_show = true
                }
              } else {
                const current = new Date()
                const timestamp = response.data.date_force_update * 1000
                const dateUpdate = new Date(timestamp)
                if (timestamp > current.getTime()) {
                  if (this.$store.state.alert_show === false) {
                    alert('Na serwerze produkcyjnym znaleziono nowszą wersję aplikacji, aby ją pobrać zrestartuj aplikację (zakończ działanie aplikacji w tle). UWAGA: auto aktualizacja nastąpi:' + dateUpdate.toLocaleString('pl-PL', { weekday: 'long' }) + dateUpdate.toLocaleString('pl-PL'))
                  }
                  this.$store.state.alert_show = true
                } else {
                  alert('Na serwerze produkcyjnym znaleziono nowszą wersję aplikacji, która jest wdrożona automatycznie. Nastąpi restart aplikacji')
                  this.force_update()
                }
              }
            }
          }
        })
    },
    force_update: function () {
      window.location.reload(true)
    }
  }
})
new Vue({
  router,
  store,
  created () {
    this.$store.commit('EXECUTE_OFFLINE_STACK_MODULE_NAME')
    const favoritesData = localStorage.getItem('favorites_array')
    if (favoritesData) {
      const favorites = JSON.parse(favoritesData)
      this.$store.commit('SET_FAVORITES', favorites)
    }
  },
  render: h => h(App)
}).$mount('#app')
