<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="globalGoTo('/Alcohol/', null)">
        <div class="icon"><i class="fa-solid fa-map-pin"></i></div>
        <div class="label">Badany na miejscu</div>
      </div>
      <div class="element" @click="globalGoTo('/Homeless/', null)">
        <div class="icon"><i class="fa-solid fa-diamond-turn-right"></i></div>
        <div class="label">Badany oddalił się z miejsca</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoemAlcohol.vue'
}
</script>

<style scoped lang="scss">
@import "src/views/grid";

</style>
