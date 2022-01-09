<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="goto('A')">
        <div class="icon"><img :src="require(`@/assets/road_sign/A/A-30.png`)" alt="Sign"/></div>
        <div class="label">Znaki ostrzegawcze (A)</div>
      </div>
      <div class="element" @click="goto('B')">
        <div class="icon"><img :src="require(`@/assets/road_sign/B/B-1.png`)" alt="Sign"/></div>
        <div class="label">Znaki zakazu (B)</div>
      </div>
      <div class="element" @click="goto('C')">
        <div class="icon"><img :src="require(`@/assets/road_sign/C/C-12.png`)" alt="Sign"/></div>
        <div class="label">Znaki nakazu (C)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sign.vue',
  methods: {
    goto (category) {
      this.$router.push({ name: 'FormSigns', params: { sign_category: category } })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";
@import "src/views/main_layout.scss";
img {
  width: 40px;
  height: 40px;
}
.element {
  color: #98C1D9;
  background-color: #3D5A80;
}
.element:hover{
  background-color: $orange;
}
</style>
