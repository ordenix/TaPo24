<template>
  <div>
    <div id="search_top_bar2">
      <input type="search" name="title" placeholder="Wyszukaj kraj" v-model="search_text">
    </div>
    <div class="container">
      <div class="country_card" v-for="(element, index) in filter_data" :key="index">
        <div class="master_title">{{element.country}}</div>
        <div v-if="element.remarks" class="sub_title">{{element.remarks}}</div>
        <div v-if="element.used_remarks">
          <div class="sub_title" v-for="(element2, index) in element.used_remarks" :key="index+100">{{index}}). {{element2}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drivingLicence from '@/views/Data/driving_licence.json'
export default {
  name: 'Driving_Licence_Country.vue',
  data () {
    return {
      drivingLicence: drivingLicence.permitted_licence,
      search_text: ''
    }
  },
  computed: {
    filter_data () {
      return this.drivingLicence.filter(element => element.country.toLowerCase().includes(this.search_text.toLowerCase()))
    }
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout";
.container {
  padding: 10px;
}
.country_card {
  background-color: #3d5a80;
  border-radius: 5px ;
  margin: 5px;
  padding: 10px 15px;
}
.sub_title {
  font-family: $text-family;
  color: #e0fbfc;
  padding: 3px;
}
</style>
