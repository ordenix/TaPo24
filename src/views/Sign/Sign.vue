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
      <div class="element" @click="goto('D')">
        <div class="icon"><img :src="require(`@/assets/road_sign/D/D-34.png`)" alt="Sign"/></div>
        <div class="label">Znaki informacyjne (D)</div>
      </div>
      <div class="element" @click="goto('E')">
        <div class="icon"><img :src="require(`@/assets/road_sign/E/E-1.png`)" alt="Sign"/></div>
        <div class="label">Znaki kierunku i miejscowości (E)</div>
      </div>
      <div class="element" @click="goto('F')">
        <div class="icon"><img :src="require(`@/assets/road_sign/F/F-11.png`)" alt="Sign"/></div>
        <div class="label">Znaki uzupełniające (F)</div>
      </div>
      <div class="element" @click="goto('P')">
        <div class="icon"><img :src="require(`@/assets/road_sign/P/P-16.png`)" alt="Sign"/></div>
        <div class="label">Znaki poziome (P)</div>
      </div>
      <div class="element" @click="goto('S')">
        <div class="icon"><img :src="require(`@/assets/road_sign/S/S-4.png`)" alt="Sign"/></div>
        <div class="label">Sygnały drogowe (S)</div>
      </div>
      <div class="element" @click="goto('T')">
        <div class="icon"><img :src="require(`@/assets/road_sign/T/T-1.png`)" alt="Sign"/></div>
        <div class="label">Tabliczki do znaków drogowych (T)</div>
      </div>
      <div class="element" @click="goto('G')">
        <div class="icon"><img :src="require(`@/assets/road_sign/G/g-3.png`)" alt="Sign"/></div>
        <div class="label">Znaki dodatkowe (G)</div>
      </div>
      <div class="element" @click="goto('R')">
        <div class="icon"><img :src="require(`@/assets/road_sign/R/R-1.png`)" alt="Sign"/></div>
        <div class="label">Dodatkowe znaki szlaków rowerowych (R)</div>
      </div>
      <div class="element" @click="goto('W')">
        <div class="icon"><img :src="require(`@/assets/road_sign/W/W-5.png`)" alt="Sign"/></div>
        <div class="label">Dodatkowe znaki dla kierujących pojazdami wojskowymi (W)</div>
      </div>
      <div class="element" @click="goto('ATBT')">
        <div class="icon"><img :src="require(`@/assets/road_sign/ATBT/BT-3.png`)" alt="Sign"/></div>
        <div class="label">Dodatkowe znaki dla kierujących tramwajami (ATBT)</div>
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
@import "../grid";
@import "../main_layout";
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
