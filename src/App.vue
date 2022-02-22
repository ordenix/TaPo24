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
      'block_ini_logo'
    ])
  },
  created () {
    this.$store.commit('SET_BLOCKING')
  },
  mounted () {
    if (this.block_ini_logo) {
      this.show_app()
    } else setTimeout(this.show_app, 4001)
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
    show_app () {
      this.login_form = true
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
  transform: translateY(-112px);
  box-shadow: none;
}
#view {
  transition: 0.2s;
  margin-top: 112px;
}
#search_top_bar2 {
  position: sticky;
  position: -webkit-sticky;
  top: 110px; /* required */
  background-color: #EE6C4D;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.2s;
}
.search_top_bar2--hidden {
  transform: translateY(-112px);
  box-shadow: none;
 }
@media only screen and (min-width: 560px) {
  #search_top_bar2 {
  top: 90px;
  }
  #view {
    margin-top: 90px;
  }
  .search_top_bar2--hidden {
    transform: translateY(-90px);
  }
}
</style>
