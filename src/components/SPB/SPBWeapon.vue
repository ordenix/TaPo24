<template>
  <div class="small_main_container">
    <div class="master_title"> Przypadki wykorzystania broni palnej</div>
    <div v-for="(element, index) in weapon_data" :key="index">
      <hr>
      <div v-for="(sub_element, index) in element.used_conditionals" :key="index +100">
        <div class="sub_element"><i class="fa-solid fa-caret-right"></i> {{sub_element}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import spb from '@/views/Data/SPB.json'
export default {
  name: 'SPBWeapon',
  data () {
    return {
      weapon_data: spb.weapon_list
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
.sub_element{
  padding: 10px;
}
</style>
