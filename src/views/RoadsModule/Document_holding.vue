<template>
  <div>
    <div id="search_top_bar2" v-show="selected_module!==''">
      <input style="border-radius: 15px; padding: 5px;" type="text" placeholder="Wprowadź opis" v-model="input_text">
      <select style="border-radius: 15px;"  v-model="selected_option">
        <option v-for="(option, index) in options_list" v-bind:value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div id="main">
      <div class="container" v-if="selected_module===''">
        <div class="element" @click="select_module('driving_licence')">
          <div class="icon"><i class="fas fa-id-card"></i></div>
          <div class="label">Prawo jazdy</div>
        </div>
        <div class="element" @click="select_module('proof_of_registration')">
          <div class="icon"><i class="fas fa-car"></i></div>
          <div class="label">Dowody rejestracyjne</div>
        </div>
      </div>
      <div v-if="selected_module!==''">
        <div class="small_main_container" v-for="(element, index) in filter_data" :key="index">
          <div class="master_title">{{element.law}}</div>
          <div class="sub_title">({{element.description}})</div>
          <div class="text">{{element.law_text}}</div>
          <div class="remarks" v-if="element.remarks!==''">{{element.remarks}}</div>
          <div class="remarks"
               v-if="element.time_to==='0' && selected_module==='proof_of_registration'">
                Pokwitowanie nie zezwala na dalsze używanie pojazdu
          </div>
          <div class="remarks"
               v-if="element.time_to!=='0' && element.time_to!=='' && selected_module==='proof_of_registration'">
                Pokwitowanie może zezwalać na dalsze używanie pojazdu do {{element.time_to}}
          </div>
          <div class="remarks"
               v-if="element.time_to==='0' && selected_module==='driving_licence'">
            Pokwitowanie nie zezwala na dalsze kierowanie pojazdami
          </div>
          <div class="remarks"
               v-if="element.time_to==='7 dni' && selected_module==='driving_licence'">
            Pokwitowanie uprawnia do kierowania  pojazdem  w  ciągu 7  dni.
          </div>
          <div class="remarks"
               v-if="element.time_to==='24 godziny' && selected_module==='driving_licence'">
            Pokwitowanie uprawnia  do  kierowania  pojazdem  w  okresie 24  godzin od chwili zatrzymania
          </div>
          <div class="remarks"
               v-if="element.time_to==='24 godziny/ 72 godziny*' && selected_module==='driving_licence'">
            Pokwitowanie uprawnia  do  kierowania  pojazdem  w  okresie 24 lub 72 (w przypadku gdy kierujący  pojazdem  nie  ma  miejsca  zamieszkania  na  terenie Polski)  godzin od chwili zatrzymania
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HoldingData from '@/views/Data/holding.json'
export default {
  name: 'Document_holding.vue',
  computed: {
    filter_data () {
      return this.selected_data.filter(element => element.other_country === this.selected_option)
        .filter(element => element.description.toLowerCase().includes(this.input_text.toLowerCase()))
    }
  },
  data () {
    return {
      input_text: '',
      selected_module: '',
      selected_data: null,
      selected_option: false,
      options_list: [
        { value: false, text: 'Dokumenty krajowe' },
        { value: true, text: 'Dokumenty zagraniczne' }
      ]
    }
  },
  methods: {
    select_module (parameters) {
      this.selected_module = parameters
      if (parameters === 'driving_licence') this.selected_data = HoldingData.driving_licence_array
      if (parameters === 'proof_of_registration') this.selected_data = HoldingData.proof_of_registration_array
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
@import "src/views/grid";
.small_main_container {
  margin: 10px 10px;
  font-family: $text-family;
}
.master_title {
  font-size: 23px;
}
.new_search{
  display: flex;
  background: #edf2f7;
  border-radius: 8px;
  width: 100%;
}
.sub_title {
  color: #e0fbfc;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.text {
  padding: 10px;
  color: #e0fbfc;
  text-align: justify;
}
.remarks {
  padding: 5px 10px;
  color: #EE6C4D;
  font-weight: bold;
}
</style>
