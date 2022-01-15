<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="goto('/sign/')">
        <div class="icon"><i class="fas fa-map-signs"></i></div>
        <div class="label">Znaki drogowe</div>
      </div>
      <div class="element" @click="goto('/TypeAccident/')">
        <div class="icon"><i class="fas fa-car-crash"></i></div>
        <div class="label">Kwalifikacja zdarzenia</div>
      </div>
      <div class="element" @click="goto('/ControlList/')">
        <div class="icon"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="label">Kody usterek</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Road.vue',
  data () {
    return {
    }
  },
  methods: {
    goto (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped lang="scss">
@import "grid";

</style>
