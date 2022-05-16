<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="globalGoTo('/RequiredDocuments/', null)">
        <div class="icon"><i class="fa-regular fa-paste"></i></div>
        <div class="label">Wymagane dokumenty</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home.Vue'
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
@import "src/views/grid";
</style>
