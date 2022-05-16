<template>
  <div id="main">
    <div class="small_main_container">
      <div class="title">{{ Alco_Data[step].question }}</div>
      <div class="answer_box" v-if="!Alco_Data[step].final_step">
        <div class="orange_button" @click="go_to(Alco_Data[step].step_answer_1)"> {{ Alco_Data[step].answer_1 }}</div>
        <div class="orange_button" @click="go_to(Alco_Data[step].step_answer_2)">{{ Alco_Data[step].answer_2 }}</div>
      </div>
      <div class="to_do" v-if="Alco_Data[step].final_step"> {{ Alco_Data[step].to_do }}</div>
      <div class="list_box" v-if="Alco_Data[step].to_do_list">
        <div class="list" v-for="(element, index) in Alco_Data[step].to_do_list" :key="index"><i class="fas fa-circle"></i> {{element}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AlkoData from '@/views/Data/AlkoData.json'
export default {
  name: 'HomelessAlco',
  data () {
    return {
      Alco_Data: AlkoData.homeless_array,
      step: 0,
      piervous_step: 0
    }
  },
  methods: {
    go_to (id) {
      this.piervous_step = this.step
      this.step = parseInt(id)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
@import "src/views/others";
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
