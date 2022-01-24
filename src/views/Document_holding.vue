<template>
  <div>
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
        <div class="small_main_container" v-for="(element, index) in selected_data" :key="index">
          <div class="master_title">{{element.law}}</div>
          <div class="sub_title">{{element.description}}</div>
          <div class="text">{{element.law_text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HoldingData from '@/holding.json'
export default {
  name: 'Document_holding.vue',
  data () {
    return {
      selected_module: '',
      selected_data: null
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
@import "main_layout";
@import "grid";
.small_main_container {
  margin: 10px 10px;
}
</style>
