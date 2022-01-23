<template>
  <div id="app">
    <navBar class="navbar"/>
    <div class="test"></div>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  name: 'App',
  components: {
    navBar
  },
  mounted () {
    const nav = document.querySelector('.navbar')
    const searchBox = document.querySelector('#search_top_bar2')
    let lastScrollY = window.scrollY
    if (searchBox != null) {
      window.addEventListener('scroll', () => {
        if (lastScrollY > 70) {
          if (lastScrollY < window.scrollY) {
            nav.classList.add('navbar--hidden')
            searchBox.classList.add('search_top_bar2--hidden')
          } else {
            nav.classList.remove('navbar--hidden')
            searchBox.classList.remove('search_top_bar2--hidden')
          }
        }
        lastScrollY = window.scrollY
      })
    }
  },
  updated () {
    const nav = document.querySelector('.navbar')
    const searchBox = document.querySelector('#search_top_bar2')
    let lastScrollY = window.scrollY
    if (searchBox != null) {
      window.addEventListener('scroll', () => {
        if (lastScrollY > 70) {
          if (lastScrollY < window.scrollY) {
            nav.classList.add('navbar--hidden')
            searchBox.classList.add('search_top_bar2--hidden')
          } else {
            nav.classList.remove('navbar--hidden')
            searchBox.classList.remove('search_top_bar2--hidden')
          }
        }
        lastScrollY = window.scrollY
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap');
body {
  background-color: #293241;
  padding: 0;
  margin: 0;
  overscroll-behavior-y: contain;
  --nav-height: 72px;
}
#app {
  background-color: #293241;
}
.navbar {
  position: fixed;
  top: 0px;
  z-index: 10;
  transition: transform 0.2s;
}
.navbar--hidden {
  transform: translateY(-72px);
  box-shadow: none;
}
#view {
  transition: 0.2s;
  margin-top: 72px;
}
#search_top_bar2 {
  position: sticky;
  position: -webkit-sticky;
  top: 70px; /* required */
  background-color: #EE6C4D;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.2s;
}
.search_top_bar2--hidden {
  transform: translateY(-72px);
  box-shadow: none;
 }
@media only screen and (min-width: 560px) {
  #search_top_bar2 {
  top: 52px;
  }
  #view {
    margin-top: 52px;
  }
  .search_top_bar2--hidden {
    transform: translateY(-52px);
  }
}
</style>
