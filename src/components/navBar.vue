<template>
  <div class="navBar2">
    <div class="header">
      <div class="ico_logo">
      </div>
      <div class="htl">
        <img :src="require(`../assets/others/logo-kolor2.png`)" alt="Sign"/>
      </div>
      <div>
      </div>
    </div>
    <div class="routeBar" v-if="true">
      <router-link :to="{name: 'Home'}" class="desktop"><div class="desktop"><div :class="[$route.name==='Home' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-home"></i></div> Home</div></div></router-link>
      <router-link :to="{path: '/tariff/'}"><div :class="[$route.name==='Tariff' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-book-reader"></i></div>Taryfikator</div></router-link>
      <router-link :to="{path: '/road/'}"><div :class="[$route.name==='Road' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-road"></i></div>Droga</div></router-link>
      <router-link :to="{path: '/law'}"><div :class="[$route.name==='Law' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-gavel"></i></div>Przepisy</div></router-link>
      <router-link :to="{path: '/helpers/'}"><div :class="[$route.name==='Helpers' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="far fa-life-ring"></i></div>Pomoce</div></router-link>
      <router-link :to="{path: '/about/'}" class="desktop"><div class="desktop"><div :class="[$route.name==='About' ? 'nav_element_selected' : 'nav_element']"><div class="icon"><i class="fas fa-info"></i></div> Aplikacji</div></div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar.vue'
}
</script>

<style scoped>
.navbar2 {
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
.navBar2 {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 112px;
  background-color: #3D5A80;
}
.routeBar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 3px;
  justify-content: center;
  background-color: #3D5A80;
  padding: 0;
  width: 100%;
  /*height: 72px;*/
}
.desktop {
  display: none;
}
a {
  color: unset;
  text-decoration: unset;
}
.htl > img {
  width: 150px;
}
.ico_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.ico_logo > img {
  width: 30px;
}
.tesst{
  position: sticky;
  top: 0px;
  z-index: 10;
}
.nav_element {
  border-radius: 5px;
  background-color: #EE6C4D;
  margin: 8px 2px;
  padding: 6px 5px;
  text-align: center;
  font-family: 'Readex Pro', sans-serif;
  font-size: 15px;
}
.nav_element_selected {
  background-color: #98C1D9;
  margin: 8px 2px;
  min-width: 10px;
  padding: 6px 5px;
  border-radius: 5px;
  text-align: center;
  font-family: 'Readex Pro', sans-serif;
  font-size: 15px;
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
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3px;
  justify-content: center;
  background-color: #3D5A80;
  padding: 0;
  width: 100%;
}
.header > div {
  display: flex;
  justify-content: center;
}
@media only screen and (min-width: 560px) {
  .desktop {
    display: unset;
  }
  .nav_element {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav_element_selected {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav_element > .icon {
    margin: 0px 5px;
  }
  .nav_element_selected > .icon {
    margin: 0px 5px;
  }
  .routeBar{
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .navBar2 {
    height: 90px;
  }
}
</style>
