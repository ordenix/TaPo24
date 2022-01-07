<template>
  <div class="main">
    <div class="main_container">
      <div id="alert">{{alert_text}}</div>
      <div class="title">Wprowadź kod:</div>
      <input id="postal_input" @click="onInputPostalClick" type="text" name="postal-code" placeholder="Wprowadź kod pocztowy" v-model="postal">
      <input v-if="false" @click="onInputCityClick" type="text" name="city" placeholder="Wprowadź miasto" v-model="city">
      <div class="place_button">
        <div class="orange_button" @click="onButtonClick">
          <div class="button_label">
            Szukaj
          </div>
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="response_place">
        <div id="response">
          <div>Miejscowość:</div>
          <div> {{data.miejscowosc}}</div>
          <div>Gmina:</div>
          <div>{{data.gmina}}</div>
          <div>Powiat:</div>
          <div>{{data.powiat}}</div>
          <div>Województwo:</div>
          <div>{{data.wojewodztwo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Postal_code.vue',
  data () {
    return {
      alert_text: '',
      array_data: [],
      city: '',
      data: {
        gmina: '',
        miejscowosc: '',
        powiat: '',
        wojewodztwo: ''
      },
      postal: ''
    }
  },
  mounted () {
    const input = document.getElementById('postal_input')
    input.addEventListener('keypress', keypress => {
      if (keypress.key === 'Enter') {
        this.onButtonClick()
      }
    })
  },
  methods: {
    destroy_Alert () {
      document.getElementById('alert').style.fontSize = '0'
      document.getElementById('alert').style.padding = '0'
      document.getElementById('alert').style.opacity = '0'
    },
    onButtonClick () {
      if (this.city === '' && this.postal === '') {
        this.show_alert('Wprowadź kod pocztowy !')
        return
      }
      if (this.city === '') {
        if (this.postal.search(/[A-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]/) !== -1) {
          this.show_alert('Wprowadź prawidłowy kod pocztowy!!')
        } else {
          if (this.postal.search(/^\d{2}(-?\d{3})?$/) !== -1) {
            console.log('postal-true')
            if (this.postal.search(/^[0-9]{5}$/) !== -1) {
              console.log('number to modify')
              const convert = [this.postal.slice(0, 2), '-', this.postal.slice(2)].join('')
              console.log(convert)
              this.send_function(convert, 'postal')
            } else {
              this.send_function(this.postal, 'postal')
            }
          } else {
            this.show_alert('Wprowadź prawidłowy kod pocztowy!!')
          }
        }
      } else {
        this.send_function(this.city, 'city')
      }
    },
    onInputPostalClick () {
      this.city = ''
      this.data = {
        gmina: '',
        miejscowosc: '',
        powiat: '',
        wojewodztwo: ''
      }
      document.getElementById('response').style.fontSize = '0'
      document.getElementById('response').style.opacity = '0'
    },
    onInputCityClick () {
      this.postal = ''
      this.data = {
        gmina: '',
        miejscowosc: '',
        powiat: '',
        wojewodztwo: ''
      }
      document.getElementById('response').style.fontSize = '0'
      document.getElementById('response').style.opacity = '0'
    },
    send_function (code, type) {
      const headers = {
        'Content-Type': 'application/json'
      }
      this.array_data = []
      if (type === 'postal') {
        axios
          .get('http://kodpocztowy.intami.pl/api/' + code, { headers })
          .then(response => {
            let lastElement = null
            for (const element of response.data) {
              if (lastElement !== element.miejscowosc) {
                this.array_data.push(element)
              }
              lastElement = element.miejscowosc
            }
            this.data = response.data[0]
            console.log('response')
            console.log(response.data)
          })
      }
      if (type === 'city') {
        axios
          .get('http://kodpocztowy.intami.pl/city/' + code, { headers })
          .then(response => {
            this.data = response.data[0]
            console.log(response.data)
          })
      }
      document.getElementById('response').style.fontSize = '15px'
      document.getElementById('response').style.opacity = '100'
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
@import "others";
#alert {
  opacity: 0;
  font-size: 0;
  border-radius: 8px;
  padding: 0;
  background-color: #EE6C4D;
  transition: opacity .5s;
  transition: font-size .5s;
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
}
.main_container {
  margin: 10px 10px;
  background-color: #3D5A80;
  border-radius: 8px;
  padding: 20px 10px;
  height: min-content;
  transition: height 5s;
  -webkit-transition: height 5s ease;
}
.title {
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  color: #EE6C4D;
  margin-bottom: 5px;
}
#response {
  opacity: 0;
  font-size: 0;
  transition: font-size .5s;
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  color: #98C1D9;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}
.response_place {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
input {
  width: 100%;
  margin-right: 10px;
  font-size: 15px;
}
.orange_button {

}
.place_button {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.res {
  font-size: 0;
  transition: font-size .5s;
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  color: #98C1D9;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}
@media only screen and (min-width: 700px) {
  .main {
    display: flex;
    justify-content: center;
  }
  .main_container {
    min-width: 400px;
  }
}
</style>
