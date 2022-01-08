<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="goto('/sign/')">
        <div class="icon"><i class="fas fa-map-signs"></i></div>
        <div class="label">Znaki drogowe</div>
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
