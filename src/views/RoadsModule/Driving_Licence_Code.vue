<template>
  <div>
    <div id="search_top_bar2">
      <input style="border-radius: 15px; padding: 5px;" type="text" placeholder="Wprowadź kod lub nazwę ograniczenia" v-model="search_text">
    </div>
    <div class="master_container">
      <div v-for="(element, index) in filter_data" :key="index" :class="element.sub_title==='' ? 'code_element_title': 'code_element'">
          <div class="cont">{{element.code}}</div>
          <div v-if="element.sub_title===''" class="title">{{element.title}}</div>
          <div class="sub_title" v-if="element.sub_title!==''">{{element.sub_title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import drivingLicence from '@/views/Data/driving_licence.json'
export default {
  name: 'Driving_Licence_Code',
  computed: {
    filter_data () {
      return this.code_array.filter(element => element.code.includes(this.search_text) || element.title.toLowerCase().includes(this.search_text.toLowerCase()) || element.sub_title.toLowerCase().includes(this.search_text.toLowerCase()))
    }
  },
  data () {
    return {
      code_array: [],
      search_text: ''
    }
  },
  mounted () {
    this.code_array = drivingLicence.code
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
.master_container {
  width: auto;
  font-family: $text-family;
  color: #e0fbfc;
  font-weight: bold;
}
.code_element{
  display: flex;
  padding: 8px 0;
  align-items: center;
}
.code_element_title{
  display: flex;
  border-bottom: 2px solid #EE6C4D;
  padding: 8px 0;
  align-items: center;
}
.cont {
  width: 70px;
}
.title {
  width: 100%;
  font-weight: bold;
}
.sub_title {
  width: 100%;
  font-weight: lighter;
}
</style>
