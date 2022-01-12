<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="goto('/QualificationsAccident2/')">
        <div class="icon"><i class="fas fa-user"></i></div>
        <div class="label">1 sprawca, minimum 1 poszkodowany</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Type_Accident.vue',
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
