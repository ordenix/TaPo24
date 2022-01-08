<template>
  <div id="main">
    <div class="formatter">
      <img :src="require(`../assets/${sign_data.path}`)" />
      <div class="name">{{ sign_data.name }}</div>
      <div class="description">{{ sign_data.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signCard.vue',
  props: {
    sign_data: {
      name: null,
      description: null,
      path: null
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/views/main_layout.scss";
img {
  width: 50px;
  height: 50px;
}
#main {
  background-color: $secondary_color;
  height: 100%;
  border-radius: 2px;
  font-family: $text-family;
  color: $text;

}
.formatter {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.description {
  text-align: center;
  font-size: 10px;
}
@media only screen and (min-width: 1000px) {
  .description {
    font-size: 15px;
  }
}
</style>
