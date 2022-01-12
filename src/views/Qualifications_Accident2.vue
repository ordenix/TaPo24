<template>
  <div>
    <div class="small_main_container">
      <div class="title">{{ Accident_Data[step].question }}</div>
      <div class="answer_box" v-if="!Accident_Data[step].final_step">
        <div class="orange_button" @click="go_to(Accident_Data[step].step_answer_1)"> {{Accident_Data[step].answer_1}} </div>
        <div class="orange_button" @click="go_to(Accident_Data[step].step_answer_2)">{{Accident_Data[step].answer_2}}</div>
      </div>
      <div class="to_do" v-if="Accident_Data[step].final_step"> {{Accident_Data[step].to_do}}</div>
      <div class="list_box" v-if="Accident_Data[step].to_do_list">
        <div class="list" v-for="(element, index) in Accident_Data[step].to_do_list" :key="index"><i class="fas fa-circle"></i> {{element}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AccidentData from '@/Accident_data.json'
export default {
  name: 'Qualifications_Accident.vue',
  data () {
    return {
      Accident_Data: AccidentData.accident_array,
      step: 0
    }
  },
  methods: {
    go_to (id) {
      this.step = parseInt(id)
    }
  }
}
</script>

<style scoped lang="scss">
@import "main_layout";
@import "others";
.title {
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #98C1D9;
}
.answer_box {
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
}
.orange_button{
  width: 50%;
  text-align: center;
  margin: 2px 4px;
}
.to_do {
  padding: 10px 0;
  font-family: 'Readex Pro', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #EE6C4D;
}
.list {
  font-family: 'Readex Pro', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #EE6C4D;
}
.list_box {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;

}
</style>
