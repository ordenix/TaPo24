<template>
  <div>
    <div id="search_top_bar2">
      <input style="border-radius: 15px; padding: 5px;" type="text" placeholder="Wprowadź opis" v-model="search_text">
      <div class="checkBox" v-if="false">
        <input type="checkbox" class="checkBox_box">
        <div>
          <div>Pokaż wszystkie</div> <div class="small_text">(zaznaczenie pokaże cały katalog bez zastosowania wyszukiwarki - może powodować problemy na słabszych urządzeniach)</div>
        </div>
      </div>
    </div>
    <div id="footer"> Lista usterek: {{faults_array}}</div>
    <div id="main_container">
      <div v-for="(element, index) in filtered_data_faults_array" :key="index">
        <div id="container" v-if="element.standard.length!==0 && render">
          <div class="title">{{ filter_title(element.title_id)}}</div>
          <div class="sub_title">{{element.sub_title_depth_1_name}}</div>
          <div class="sub_title">{{element.sub_title_depth_2_name}}</div>
          <div class="sub_title" v-if="element.sub_title_depth_1_name !==element.position">{{element.position}}</div>
          <hr>
          <div class="methods">Sposób sprawdzenia: </div>
          <div class="methods">{{element.methods}}</div>
          <div class="methods" v-if="element.methods_remarks">UWAGA: {{element.methods_remarks}}</div>
          <hr>
          <div class="faults_container" v-for="(faults, index) in element.standard" :key="index+1000">
            <div class="faults_id" v-if="element.standard.length>1"> {{element.position_code}}.{{faults.id}}</div>
            <div class="faults_id" v-if="element.standard.length===1"> {{element.position_code}}</div>
            <div class="faults_text_box">
              <div class="faults_text_box_step_one">
                <div class="fault_text">{{faults.name}}</div>
                <div class="fault_category">Kategoria usterki:
                  <div class="green" v-if="faults.level_category_faults===1 || faults.level_category_faults===3 || faults.level_category_faults===5 ||faults.level_category_faults===7">DROBNA</div>
                  <div class="orange" v-if="faults.level_category_faults===2 || faults.level_category_faults===3 || faults.level_category_faults===6 ||faults.level_category_faults===7">POWAŻNA</div>
                  <div class="red" v-if="faults.level_category_faults===4 || faults.level_category_faults===5 || faults.level_category_faults===6 ||faults.level_category_faults===7">NIEBEZPIECZNA</div></div>
              </div>
              <div class="faults_text_box_step_other" v-if="faults.name_2">
                <div class="fault_text">{{faults.name_2}}</div>
                <div class="fault_category">Kategoria usterki:
                  <div class="green" v-if="faults.level_category_faults_2===1 || faults.level_category_faults_2===3 || faults.level_category_faults_2===5 ||faults.level_category_faults_2===7">DROBNA</div>
                  <div class="orange" v-if="faults.level_category_faults_2===2 || faults.level_category_faults_2===3 || faults.level_category_faults_2===6 ||faults.level_category_faults_2===7">POWAŻNA</div>
                  <div class="red" v-if="faults.level_category_faults_2===4 || faults.level_category_faults_2===5 || faults.level_category_faults_2===6 ||faults.level_category_faults_2===7">NIEBEZPIECZNA</div>
                </div>
              </div>
              <div class="faults_text_box_step_other" v-if="faults.name_3">
                <div class="fault_text">{{faults.name_3}}</div>
                <div class="fault_category">Kategoria usterki:
                  <div class="green" v-if="faults.level_category_faults_3===1 || faults.level_category_faults_3===3 || faults.level_category_faults_3===5 ||faults.level_category_faults_3===7">DROBNA</div>
                  <div class="orange" v-if="faults.level_category_faults_3===2 || faults.level_category_faults_3===3 || faults.level_category_faults_3===6 ||faults.level_category_faults_3===7">POWAŻNA</div>
                  <div class="red" v-if="faults.level_category_faults_3===4 || faults.level_category_faults_3===5 || faults.level_category_faults_3===6 ||faults.level_category_faults_3===7">NIEBEZPIECZNA</div>
                </div>
              </div>
            </div>
            <div class="button" @click="add_item(element.position_code + faults.id, faults)">
              <i class="far fa-plus-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controlListData from '@/views/Data/ControlList_data.json'
export default {
  name: 'control_list.vue',
  computed: {
    filtered_data_faults_array () {
      const returnDataArray = []
      if (this.faults_list) {
        for (const element of this.faults_list) {
          let array = []
          if (element.sub_title_depth_1_name.toLowerCase().search(this.search_text.toLowerCase()) !== -1) {
            array = element.standard
          } else {
            array = element.standard.filter(e => e.name.toLowerCase().includes(this.search_text.toLowerCase()))
            for (const faults of element.standard) {
              if (array.length === 0 && faults.name_2) {
                if (faults.name_2.toLowerCase().includes(this.search_text.toLowerCase())) {
                  array.push(faults)
                }
              }
              if (array.length === 0 && faults.name_3) {
                if (faults.name_3.toLowerCase().includes(this.search_text.toLowerCase())) {
                  array.push(faults)
                }
              }
            }
          }
          const a = {
            title_id: element.title_id,
            sub_title_depth_1_name: element.sub_title_depth_1_name,
            sub_title_depth_2_name: element.sub_title_depth_2_name,
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
      search_text: '',
      faults_array: '',
      render: false
    }
  },
  methods: {
    filter_title (id) {
      return this.title_list.filter(element => element.id === id)[0].name
    },
    add_item (id) {
      document.getElementById('footer').style.left = '0'
      if (this.faults_array.search(id) === -1) {
        if (this.faults_array === '') {
          this.faults_array = this.faults_array.concat(id)
        } else {
          this.faults_array = this.faults_array.concat(', ', id)
        }
      }
      const box = document.querySelector('#footer')
      const height = box.offsetHeight + 15
      document.getElementById('main_container').style.marginBottom = height + 'px'
    },
    change_render_state () {
      this.render = true
    }
  },
  mounted () {
    this.faults_list = controlListData.control_list_data_array
    this.title_list = controlListData.title_list_array
    setTimeout(this.change_render_state, 10)
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
#container {
  padding: 10px;
  background-color: #3D5A80;
  margin: 10px;
  border-radius: $radius;
}
.methods {
  font-family: $text-family;
  font-weight: bold;
  text-align: center;
  color: $text;
  margin: 2px 0;
}
.title {
  font-family: $text-family;
  color: #EE6C4D;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.sub_title {
  font-family: $text-family;
  color: #EE6C4D;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}
.faults_container {
  display: flex;
  font-size: 15px;
  color: #e0fbfc;
  font-family: $text-family;
  font-weight: bold;
  align-items: center;
  margin: 5px 0;
  border-bottom: 2px solid #EE6C4D;
}
.faults_text_box {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  width: 100%;
}
.faults_text_box_step_one {
  display: flex;
  flex-direction: column;
}
.faults_text_box_step_other {
  border-top: 2px dotted #EE6C4D;
  display: flex;
  flex-direction: column;
}
.fault_category {
  display: flex;
  font-style: italic;
}
.button {
  background-color: #293241;
  padding: 5px;
  border-radius: $radius;
}
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
#footer {
  padding: 5px;
  color: #fff;
  position: fixed;
  left: 100%;
  bottom: 0;
  width: 100%;
  background-color: #EE6C4D;
  z-index: 10;
  transition: ease 0.5s ;
  font-family: $text-family;
  font-weight: bold;
}
.checkBox {
  display: flex;
  align-items: center;
}
.small_text {
  font-size: 10px;
}
.checkBox_box {
  width: min-content;
}
@supports (-webkit-touch-callout: none) {
  #footer {
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
