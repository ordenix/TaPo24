<template>
  <div class="navBar2">
    <div class="header">
      <div class="ico_logo">
          <div class="tapo" @click="globalGoTo('https://tapo24.pl','link to tapo', 'web')">
        <img :src="require(`../assets/others/tapo24.png`)" style="padding: 5px; width: 84px; height: 84px;" alt="Sign"/>
      </div>
      <div class="socialfb" @click="globalGoTo('https://www.facebook.com/TaPo24/','link to fb', 'web')">
        <img :src="require(`../assets/others/facebook.png`)" style="padding: 5px; width: 32px; height: 32px; margin-top: 10px;" alt="Sign"/>
      </div>
       <div class="socialig" @click="globalGoTo('https://www.instagram.com/tapo24.pl/','link to ig', 'web')">
        <img :src="require(`../assets/others/instagram.png`)" style="width: 32px; height: 32px; margin-top: 10px; background: #fff; border-radius: 12px;" alt="Sign"/>
      </div>
      </div>
      <div class="htl" @click="globalGoTo('https://holdtheline.pl/','link to htl', 'web')">
        <img :src="require(`../assets/others/logo-kolor2.png`)" alt="Sign"/>
      </div>
      <div class="right_slot" @click="click_on_settings">
        <div class="dropdown">
          <div class="avatar">
            <i class="fa-solid fa-gear" style="height: 25px; padding: 0 10px 0 0"></i>
          </div>
          <div>
            <div id="dropdown-content">
              <router-link :to="{name: 'InstallationInfo'}"><div class="setting_item">Info. o wersji aplikacji</div></router-link>
              <router-link :to="{name: 'About'}"><div class="setting_item">Kontakt</div></router-link>

            </div>
          </div>
        </div>
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
  name: 'navBar.vue',
  data () {
    return {
      timer: null
    }
  },
  methods: {
    clear_timeout () {
      window.clearTimeout(this.timer)
    },
    goto_web (path) {
      window.open(path)
    },
    click_on_settings () {
      this.clear_timeout()
      document.getElementById('dropdown-content').style.transition = 'visibility 0s linear 0s, opacity 300ms'
      document.getElementById('dropdown-content').style.visibility = 'visible'
      document.getElementById('dropdown-content').style.opacity = '95%'
      this.timer = setTimeout(this.hide_drop_down, 2000)
    },
    hide_drop_down () {
      document.getElementById('dropdown-content').style.transition = 'visibility 0s linear 300ms, opacity 300ms'
      document.getElementById('dropdown-content').style.visibility = 'hidden'
      document.getElementById('dropdown-content').style.opacity = '0'
    }
  }
}
</script>

<style scoped>
.navbar2 {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 15px 15px;
  justify-content: center;
  top: 10%;
  left: 0;
  width: 100%;
  height: 102px;
}
.navBar2 {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 112px;
}
.routeBar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 5px;
  justify-content: center;
  padding: 0;
  width: 80%;
  left: 50%;
  transform: translate(13%, -45%);
  color: #fffafa;
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
  margin-top: 33px;
  width: 150px;
  height: 39px;
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
  top: 0;
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
  .nav_element_selected{
  background-color: #000000;
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
  background-color: #3d5a80;
}
.nav_element_selected:hover {
  background-color: #3d5a80;
}
.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3px;
  justify-content: center;
  background-color: #3D5A80;
  padding: 0;
  border-bottom: solid 2px #ee6c4d;
  width: 100%;
}
.header > div {
  display: flex;
  justify-content: center;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 5px;
}

#dropdown-content {
  display: block;
  visibility: hidden;
  position: absolute;
  background-color: #293241;
  opacity: 0;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 99;
  border-radius: 5px;
  right: 0;
  margin-right: 5px;
  padding: 10px 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  -webkit-transition: visibility 0s linear 300ms, opacity 300ms;
}
.setting_item {
  color: #e0fbfc;
  text-align: center;
  background-color: rgba(61, 90, 128, 0.25);
  padding: 10px 0;
  margin: 5px 0;
}
.dropdown:hover {
  cursor: pointer;
}
.dropdown:hover #dropdown-content2 {
  display: block;
  visibility: visible;
  opacity: 95%;
  transition: visibility 0s linear 0s, opacity 300ms;
  -webkit-transition: visibility 0s linear 0s, opacity 300ms;
}
.avatar {
  font-size: 33px;
  width: 100%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #e0fbfc;
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
    margin: 0 5px;
  }
  .nav_element_selected > .icon {
    margin: 0 5px;
  }
  .routeBar{
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .navBar2 {
    height: 90px;
  }
}
@media only screen and (max-width: 580px){
  .nav_element{
    font-size: 12px;
  }
  .nav_element_selected {
     font-size: 12px;
  }
}
@media only screen and (min-width: 680px) {
  #dropdown-content {
    width: 100%;
  }
}
</style>
