<template>
  <div class="test">
  <div class="navbar">
    <router-link :to="{name: 'Home'}"><div class="desktop"><div :class="[$route.name==='Home' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-home"></i></div> Home</div></div></router-link>
    <router-link :to="{path: '/tariff/'}"><div :class="[$route.name==='Tariff' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-book-reader"></i></div>Taryfikator</div></router-link>
    <router-link :to="{path: '/road/'}"><div :class="[$route.name==='Road' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-road"></i></div>Droga</div></router-link>
    <router-link :to="{path: '/law'}"><div :class="[$route.name==='Law' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-gavel"></i></div>Przepisy</div></router-link>
    <router-link :to="{path: '/helpers/'}"><div :class="[$route.name==='Helpers' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="far fa-life-ring"></i></div>Pomoce</div></router-link>
    <router-link :to="{path: '/about/'}"><div class="desktop"><div :class="[$route.name==='About' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-info"></i></div> Aplikacji</div></div></router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'navBar.vue'
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  background-color: #3D5A80;
  padding: 0;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
}
.desktop {
  display: none;
}
a {
  color: unset;
  text-decoration: unset;
}
.tesst{
  position: sticky;
  top: 0px;
  z-index: 10;
}
.nav_element {
  background-color: #EE6C4D;
  margin: 10px 2px;
  min-width: 10px;
  padding: 6px 10px;
  text-align: center;
  font-family: 'Readex Pro', sans-serif;
}
.nav_element_selected {
  background-color: #98C1D9;
  margin: 10px 2px;
  min-width: 10px;
  padding: 6px 10px;
  text-align: center;
  font-family: 'Readex Pro', sans-serif;
}
.logo {
  left: 0;
  position: fixed;
  height: 100%;
  font-family: 'Readex Pro', sans-serif;
  justify-content: center;
  text-align: center;
}

.nav_element:hover {
  background-color: #e0fbfc;
}
.nav_element_selected:hover {
  background-color: #e0fbfc;
}
@media only screen and (min-width: 560px) {
  .desktop {
    display: unset;
  }
  .nav_element {
    display: flex;
  }
  .nav_element_selected {
    display: flex;
  }
  .nav_element > .icon {
    margin: 0px 5px;
  }
  .nav_element_selected > .icon {
    margin: 0px 5px;
  }
  .navbar{
    height: 52px;
  }
}
</style>
