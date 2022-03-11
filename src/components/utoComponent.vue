<template>
  <div>
    <div class="small_main_container">
      <div class="master_title">
        {{uto_data.name}}
        <div class="sub_title"> {{ uto_data.definition }}</div>
      </div>
      <hr>
      <div class="title"> Uprawnienia:</div>
      <div v-for="(element, index) in uto_data.rights" :key="index" class="content"> {{ index }}. {{ element }}</div>
      <hr>
      <div class="title"> Poruszanie się:</div>
      <div v-for="(element, index) in uto_data.where" :key="index+100" class="content"> {{ index }}. {{ element }}</div>
      <hr>
      <div class="title"> Prędkość:</div>
      <div v-for="(element, index) in uto_data.speed" :key="index+200" class="content"> {{ index }}. {{ element }}</div>
      <hr>
      <div class="title"> Zabrania się:</div>
      <div v-for="(element, index) in uto_data.prohibition" :key="index+300" class="content"> {{ index }}. {{ element }}</div>
      <hr>
      <div class="title"> Zachowanie wobec pieszego:</div>
      <div class="content" v-if="uto_data.behavior"> {{ uto_data.behavior }}</div>
      <div v-if="uto_data.behavior_sub">
        <div v-for="(element, index) in uto_data.behavior_sub" :key="index+400" class="content"> {{ index }}. {{ element }}</div>
      </div>
      <hr>
      <div class="title" v-if="uto_data.stop"> Postój: </div>
      <div class="content" v-if="uto_data.stop"> {{ uto_data.stop }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'utoComponent',
  props: {
    uto_data: null
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
.small_main_container {
  margin: 10px 10px;
  font-family: $text-family;
  color: #e0fbfc;
}
.sub_title {
  color: #e0fbfc;
  font-size: 15px;
  padding: 10px 5px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #EE6C4D;
}
.content {
  padding: 10px 15px;
}
</style>
