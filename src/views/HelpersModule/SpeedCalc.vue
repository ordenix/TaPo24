<template>
  <div id="main">
    <div class="small_main_container">
      <div id="alert">{{alert_text}} <i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="master_title">Kalkulator prędkości</div>
      <div class="container">
        <div class="title">Wprowadź ograniczenie:</div>
        <input class="input" v-model="speed_limit" type="number" @change="on_change">
        <div class="title">km/h</div>
        <div class="title">Wprowadź prędkość zmierzoną:</div>
        <input class="input" type="number" v-model="speed" @change="on_change">
        <div class="title">km/h</div>
      </div>
      <div v-if="diff> 0">
        <div class="over_speed">Przekroczenie prędkości o {{diff}} km/h</div>
      </div>
      <hr>
      <div class="master_title">Wykroczenie</div>
      <div v-if="diff> 0" class="offence">
        <div class="offence_title">{{offense_data.name}}</div>
        <div class="offence_law">{{offense_data.text}}</div>
        <div class="tax_container">
          <div>
            Kwota: {{offense_data.tax}} zł
          </div>
          <div>
            Punkty: {{offense_data.points}}
          </div>
          <div>
            Kod czynu: {{offense_data.code}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tariffData from '@/views/Data/tariff_data.json'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'speed_limit_save'
    ])
  },
  name: 'SpeedCalc',
  data () {
    return {
      diff: 0,
      tariff_data: tariffData,
      offense_data: null,
      speed_limit: '',
      speed: '',
      alert_text: ''
    }
  },
  created () {
    this.speed_limit = this.speed_limit_save
  },
  methods: {
    on_change () {
      this.diff = 0
      if (this.speed_limit === '' || this.speed === '') {
        this.show_alert('Wprowadź prędkości')
      } else if (parseInt(this.speed_limit) >= parseInt(this.speed) && this.speed !== '') {
        this.show_alert('Nie doszło do przekroczenia prędkości')
      } else if (parseInt(this.speed) > 500 && parseInt(this.speed) <= 1000 && this.speed !== '') {
        this.show_alert('Chyba coś źle zmierzono')
      } else if (parseInt(this.speed) > 1000 && parseInt(this.speed) <= 2001 && this.speed !== '') {
        this.show_alert('Nawet Ania BMW tyle nie pojedzie')
      } else if (parseInt(this.speed) > 2001 && parseInt(this.speed) <= 3500 && this.speed !== '') {
        this.show_alert('Naczelnik będzie zadowolony')
      } else if (parseInt(this.speed) > 3500 && this.speed !== '') {
        this.show_alert('Kodu czynu nie znaleziono w bazie')
      } else {
        this.diff = this.speed - this.speed_limit
        this.$store.state.speed_limit_save = this.speed_limit
        if (this.diff <= 10) {
          this.offense_data = this.tariff_data.tariff_array[72]
        } else if (this.diff >= 11 && this.diff <= 15) {
          this.offense_data = this.tariff_data.tariff_array[73]
        } else if (this.diff >= 16 && this.diff <= 20) {
          this.offense_data = this.tariff_data.tariff_array[74]
        } else if (this.diff >= 21 && this.diff <= 25) {
          this.offense_data = this.tariff_data.tariff_array[75]
        } else if (this.diff >= 26 && this.diff <= 30) {
          this.offense_data = this.tariff_data.tariff_array[76]
        } else if (this.diff >= 31 && this.diff <= 40) {
          this.offense_data = this.tariff_data.tariff_array[77]
        } else if (this.diff >= 41 && this.diff <= 50) {
          this.offense_data = this.tariff_data.tariff_array[78]
        } else if (this.diff >= 51 && this.diff <= 60) {
          this.offense_data = this.tariff_data.tariff_array[79]
        } else if (this.diff >= 61 && this.diff <= 70) {
          this.offense_data = this.tariff_data.tariff_array[80]
        } else {
          this.offense_data = this.tariff_data.tariff_array[81]
        }
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
      setTimeout(this.destroy_Alert, 2500)
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
.over_speed {
  color: #e0fbfc;
  font-family: $text-family;
  padding: 10px;
}
.offence{
  color: #e0fbfc;
  font-family: $text-family;
}
.offence_title{
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
}
.offence_law{
  font-size: 12px;
  padding: 5px 0 10px 5px;
}
.tax_container{
  font-weight: bold;
  display: flex;
  justify-content: space-around;
}
@media only screen and (min-width: 700px) {
  .container {
    grid-template-columns: [first] 250px [line2] 150px [line3] 10px;
  }
}
</style>
