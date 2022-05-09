<template>
  <div id="main">
    <div class="small_main_container">
      <div id="alert">{{alert_text}} <i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="master_title">Przelicznik miligramów na promile</div>
      <div class="container">
        <div class="title">Wprowadź liczbę miligramów:</div>
        <input class="input" type="number" v-model="drunk" @change="on_change">
        <div class="title">mg/l</div>
      </div>
      <br/>
      <div v-if="diff> 0">
        <div class="over_drunk">Wartość promili w organizmie wynosi {{du}} ‰</div>
      </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'speed_limit_save'
    ])
  },
  name: 'DrunkCalc',
  data () {
    return {
      diff: 0,
      du: 0,
      promile: '2.1',
      drunk: '',
      alert_text: ''
    }
  },
  methods: {
    on_change () {
      this.diff = 0
      if (this.promile === '' || this.drunk === '') {
        this.show_alert('Wprowadź miligramy')
      } else if (parseInt(this.drunk) > 10.62) {
        this.show_alert('Hmm... przeliczam ale... Rekordzista miał 10.62 mg/l')
        this.diff = this.drunk * this.promile
        this.du = this.diff.toFixed(2)
      } else {
        this.diff = this.drunk * this.promile
        this.du = this.diff.toFixed(2)
      }
    },
    destroy_Alert () {
      document.getElementById('alert').style.fontSize = '0'
      document.getElementById('alert').style.padding = '0'
      document.getElementById('alert').style.opacity = '0'
    },
    show_alert (text) {
      this.alert_text = text
      document.getElementById('alert').style.fontSize = '15px'
      document.getElementById('alert').style.padding = '10px'
      document.getElementById('alert').style.opacity = '100%'
      setTimeout(this.destroy_Alert, 3500)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/others";
@import "src/views/main_layout";
.container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: [first] 160px [line2] 70px [line3] 40px;
  grid-template-rows: auto;
  grid-gap: 6px;
  max-width: 500px;
}
.title {
  display: flex;
  align-items: center;
  color: #e0fbfc;
  font-family: $text-family;
  font-weight: bold;
}
.small_main_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
hr{
  width: 100%;
}
.warning {
  border-radius: 15px;
  background-color: #EE6C4D;
  color: black;
  font-weight: bold;
  padding: 10px;
  font-family: $text-family;
  text-align: center;
}
.over_drunk {
  color: #e0fbfc;
  font-family: $text-family;
  padding: 10px;
}
@media only screen and (min-width: 700px) {
  .container {
    grid-template-columns: [first] 250px [line2] 150px [line3] 10px;
  }
}
</style>
