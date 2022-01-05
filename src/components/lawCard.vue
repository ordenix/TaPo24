<template>
  <div>
    {{ data.title}}
  </div>
</template>

<script>
export default {
  name: 'lawCard.vue',
  props: {
    data: {
      title: null,
      description: null,
      date: null,
      path: null
    }
  }
}
</script>

<style scoped>

</style>
