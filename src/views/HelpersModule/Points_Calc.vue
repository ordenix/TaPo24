<template>
  <div class="main">
    <div class="small_main_container">
      <div id="alert">{{alert_text}}</div>
      <div class="title">Wprowadź kod czynu:</div>
      <input style="border-radius: 15px; padding: 2px;" id="input" type="text" placeholder="Wprowadź kod np A02" v-model="input_text">
      <div class="place_button">
        <div class="orange_button" @click="addArray">
          <div class="button_label">
          Dodaj <i class="far fa-plus-square"></i>
          </div>
        </div>
      </div>
      <div v-for="(element, index) in codeArray" :key="index">
        <div class="code_box">
          <div>{{element.full_name}}</div>
          <div class="description">{{element.description}}</div>
          <div>{{element.points}}</div>
        </div>
      </div>
      <hr v-if="codeArray.length">
      <div v-if="codeArray.length" v-bind:class="[sumReturn>24 ? 'sum_red':'sum']"> Suma: {{sumReturn}}</div>
      <div class="place_button" v-if="codeArray.length">
        <div class="orange_button" @click="clearArray">
          <div class="button_label">
            Wyczyść   <i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeDataArray from '@/views/Data/code_array_data.json'
export default {
  name: 'Points_Calc',
  data () {
    return {
      alert_text: '',
      codeArray: [],
      codeDataArray: [],
      input_text: ''
    }
  },
  computed: {
    sumReturn () {
      let sum = 0
      for (let i = 0; i < this.codeArray.length; i++) {
        sum += parseInt(this.codeArray[i].points)
      }
      return sum
    }
  },
  mounted () {
    this.codeDataArray = CodeDataArray.code_array
    const input = document.getElementById('input')
    input.addEventListener('keypress', keypress => {
      if (keypress.key === 'Enter') {
        this.addArray()
      }
    })
  },
  methods: {
    addArray () {
      if (this.input_text === '') {
        this.show_alert('Wprowadź kod czynu')
      } else {
        if (this.codeDataArray.find(element => element.full_name.toLowerCase().includes(this.input_text.toLowerCase())) ||
          this.codeDataArray.find(element => element.full_name.replace('-', '').toLowerCase().includes(this.input_text.toLowerCase())) ||
          this.codeDataArray.find(element => element.full_name.replace('-', ' ').toLowerCase().includes(this.input_text.toLowerCase()))) {
          if (this.codeDataArray.find(element => element.full_name.toLowerCase().includes(this.input_text.toLowerCase()))) {
            this.codeArray.push(this.codeDataArray.find(element => {
              return element.full_name.toLowerCase().includes(this.input_text.toLowerCase())
            }))
          }
          if (this.codeDataArray.find(element => element.full_name.replace('-', ' ').toLowerCase().includes(this.input_text.toLowerCase()))) {
            this.codeArray.push(this.codeDataArray.find(element => {
              return element.full_name.replace('-', ' ').toLowerCase().includes(this.input_text.toLowerCase())
            }))
          }
          if (this.codeDataArray.find(element => element.full_name.replace('-', '').toLowerCase().includes(this.input_text.toLowerCase()))) {
            this.codeArray.push(this.codeDataArray.find(element => {
              return element.full_name.replace('-', '').toLowerCase().includes(this.input_text.toLowerCase())
            }))
          }
          this.input_text = ''
        } else {
          this.show_alert('Brak kodu')
        }
      }
    },
    clearArray () {
      this.codeArray = []
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
      setTimeout(this.destroy_Alert, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/others";
@import "src/views/main_layout";
.title {
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  color: #EE6C4D;
  margin-bottom: 5px;
}
.place_button {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.orange_button {
  width: 100px;
}
.code_box {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $text-family;
  background-color: #293241;
  border-radius: 5px;
  padding: 5px 10px;
  color: #98C1D9;
}
.description {
  width: 200px;
  font-size: 12px;
}
.sum {
  text-align: right;
  padding-right: 20px;
  font-family: $text-family;
  color: #98C1D9;
}
.sum_red {
  text-align: right;
  padding-right: 20px;
  font-family: $text-family;
  color: #ea0c68;
  font-weight: bold;
}
</style>
