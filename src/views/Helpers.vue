<template>
  <div id="main">
    <div v-if="false" class="container">
      <div class="element" @click="goto('/postal_code/')">
        <div class="icon"><i class="fas fa-envelope"></i></div>
        <div class="label">Kody pocztowe</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Helpers.vue',
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
