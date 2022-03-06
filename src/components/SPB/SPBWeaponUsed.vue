<template>
  <div class="small_main_container">
    <div class="master_title">Przypadki użycia broni palnej</div>
    <hr>
    <div v-for="(element, index) in weapon_data" :key="index">
      <div class="subtitle">Przypadek {{ index + 1 }}</div>
      <hr>
      <div v-for="(sub_element, index) in element.used_conditionals" :key="index +100">
        <div class="sub_element">{{sub_element}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import spb from '@/views/Data/SPB.json'
export default {
  name: 'SPBWeaponUsed',
  data () {
    return {
      weapon_data: spb.weapon_array_used
    }
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
.subtitle {
  text-align: center;
  font-weight: bold;
  color: #EE6C4D;
  margin-top: 15px;
}
.sub_element{
  padding: 10px 5px 10px 10px;
}
</style>
