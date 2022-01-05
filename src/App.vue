<template>
  <div id="app">
    <navBar class="navbar"/>
    <div class="view">
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
}
#app {
  background-color: #293241;
}
.navbdar {
  position: fixed;
  top: 0;
}
</style>
