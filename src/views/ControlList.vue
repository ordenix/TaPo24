<template>
  <div>
    <div id="search_top_bar">
      <input type="text" placeholder="Wprowadź opis" v-model="search_text" >
    </div>
    sss
    <div v-for="(element, index) in filtered_data_faults_array" :key="index">
      <div class="temp" v-for="(faults, index) in element.standard" :key="index">{{element.position_code}}{{faults.id}}|||||{{element.position}}    ||||{{faults.name}}
      <div class="green" v-if="faults.level_category_faults===1 || faults.level_category_faults===3 || faults.level_category_faults===5 ||faults.level_category_faults===7">DROBNA</div>
      <div class="orange" v-if="faults.level_category_faults===2 || faults.level_category_faults===3 || faults.level_category_faults===6 ||faults.level_category_faults===7">POWAŻNA</div>
      <div class="red" v-if="faults.level_category_faults===4 || faults.level_category_faults===5 || faults.level_category_faults===6 ||faults.level_category_faults===7">NIEBEZPIECZNY</div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import controlListData from '@/ControlList_data.json'
export default {
  name: 'control_list.vue',
  computed: {
    filtered_data_faults_array () {
      const returnDataArray = []
      if (this.faults_list) {
        for (const element of this.faults_list) {
          let array = []
          array = element.standard.filter(e => e.name.includes(this.search_text))
          const a = {
            title_id: element.title_id,
            sub_title_depth_1_id: element.sub_title_depth_1_id,
            sub_title_depth_2_id: element.sub_title_depth_2_id,
            position: element.position,
            position_code: element.position_code,
            methods: element.methods,
            methods_remarks: element.methods_remarks,
            standard: array
          }
          returnDataArray.push(a)
        }
      }
      return returnDataArray
    }
  },
  data () {
    return {
      faults_list: null,
      title_list: null,
      search_text: ''
    }
  },
  methods: {
    filter_title (id) {
      return this.title_list.filter(element => element.id === id)[0].name
    }
  },
  mounted () {
    this.faults_list = controlListData.control_list_data_array
    this.title_list = controlListData.title_list_array
  }
}
</script>

<style scoped lang="scss">
@import "main_layout";
.temp {
  color: #e0fbfc;
  display: flex;
}
.red {
  color: red;
}
.green {
  color: green;
}
.orange {
  color: orange;
}
</style>
