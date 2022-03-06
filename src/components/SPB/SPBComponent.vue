<template>
  <div class="small_main_container">
    <div class="master_title">{{spbData.name}}</div>
    <hr>
    <div class="subtitle">Przypadki użycia: </div>
    <div v-for="(element , index) in spbData.used_conditionals" :key="index+100">
      <div class="condition">
        <i class="fa-solid fa-caret-right"></i> {{element}}
      </div>
    </div>
    <hr>
    <div class="subtitle">Wyjątki:</div>
    <div v-for="(element , index) in spbData.exception" :key="index+200">
      <div class="condition">
        <i class="fa-solid fa-caret-right"></i> {{element}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPBComponent',
  props: {
    spbData: null
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
.small_main_container {
  margin: 10px 10px;
  font-family: $text-family;
  color: $text;
}
.condition {
  padding: 10px;
}
.subtitle {
  color: #EE6C4D;
  font-weight: bold;
  font-size: 18px;
}
</style>
