<template>
  <div id="app">
    <div id="login_screen" v-if="!login_form && $route.name==='Home'">
      <video class="video" autoplay muted>
        <source :src="require(`@/assets/others/video.mp4`)" type="video/mp4">
      </video>
    </div>
    <navBar class="navbar" v-if="login_form || $route.name!=='Home'"/>
    <div id="view" v-if="login_form || $route.name!=='Home'">
      <router-view/>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    navBar
  },
  data () {
    return {
      timer: null,
      login_form: false
    }
  },
  computed: {
    ...mapState([
      'block_ini_logo',
      'permissions'
    ])
  },
  created () {
    this.$store.commit('SET_BLOCKING')
    this.$store.commit('GET_INSTALLATION_PARAM')
  },
  mounted () {
    let permissions = localStorage.getItem('PERMISSIONS')
    if (permissions) {
      permissions = JSON.parse(permissions)
      if (permissions.skipIntro === true) {
        this.show_app()
      } else {
        if (this.block_ini_logo) {
          this.show_app()
        } else setTimeout(this.show_app, 4001)
      }
    } else {
      if (this.block_ini_logo) {
        this.show_app()
      } else setTimeout(this.show_app, 4001)
    }
    const nav = document.querySelector('.navbar')
    const searchBox = document.querySelector('#search_top_bar2')
    let lastScrollY = window.scrollY
    if (searchBox != null) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY + 50 || window.scrollY < lastScrollY - 50) {
          if (lastScrollY > 70) {
            if (lastScrollY < window.scrollY) {
              nav.classList.add('navbar--hidden')
              searchBox.classList.add('search_top_bar2--hidden')
            } else {
              this.clear_timeout()
              nav.classList.remove('navbar--hidden')
              searchBox.classList.remove('search_top_bar2--hidden')
              this.timer = setTimeout(this.hide_top_bar, 2000)
            }
          }
          lastScrollY = window.scrollY
        }
      })
    }
  },
  methods: {
    hide_top_bar () {
      const nav = document.querySelector('.navbar')
      const searchBox = document.querySelector('#search_top_bar2')
      if (window.scrollY > 70) {
        nav.classList.add('navbar--hidden')
        searchBox.classList.add('search_top_bar2--hidden')
      }
    },
    clear_timeout () {
      window.clearTimeout(this.timer)
    },
    remove_blocking () {
      this.$store.commit('REMOVE_FLAG_BLOCKING')
    },
    show_app () {
      this.$store.commit('SET_FLAG_BLOCKING')
      setTimeout(this.remove_blocking, 10000)
      this.login_form = true
      document.getElementsByTagName('body')[0].style.height = 'unset'
    }
  },
  updated () {
    // do bartka co by nie marudził
    const nav = document.querySelector('.navbar')
    const searchBox = document.querySelector('#search_top_bar2')
    let lastScrollY = window.scrollY
    if (searchBox != null) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY + 50 || window.scrollY < lastScrollY - 50) {
          if (lastScrollY > 70) {
            if (lastScrollY < window.scrollY) {
              nav.classList.add('navbar--hidden')
              searchBox.classList.add('search_top_bar2--hidden')
            } else {
              this.clear_timeout()
              nav.classList.remove('navbar--hidden')
              searchBox.classList.remove('search_top_bar2--hidden')
              this.timer = setTimeout(this.hide_top_bar, 2000)
            }
          }
          lastScrollY = window.scrollY
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap');
html, body {
  background-color: #293241;
  padding: 0;
  margin: 0;
  overscroll-behavior-y: contain;
  --nav-height: 112px;
  height: 100%;
}
#app {
  background-color: #293241;
  height: 100%;
}
#login_screen {
  background-color: #293241;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
video{
  height: 100%;
}
.navbar {
  position: fixed;
  top: 0;
  z-index: 10;
  transition: transform 0.2s;
}
.navbar--hidden {
  transform: translateY(-125px);
  box-shadow: none;
}
#view {
  transition: 0.2s;
  margin-top: 120px;
}
#search_top_bar2 {
  background-color: #293241b7;
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  padding: 15px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.2s;
}
.search_top_bar2--hidden {
  transform: translateY(-125px);
  box-shadow: none;
 }
@media only screen and (max-width: 560px){
  #search_top_bar2 {
    top: 125px;
    border-radius: 15px;
  }
}
@media only screen and (min-width: 560px) {
  #search_top_bar2 {
  top: 125px;
  border-radius: 15px;
  }
  #view {
    margin-top: 120px !important;
    float: none !important;
    padding: 15px 0 15px;
  }
}
</style>
