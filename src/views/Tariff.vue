<template>
  <div class="main_app">
    <div id="overlay" @click="click_on_overlay"></div>
      <div id="overlay_container" @click="click_on_overlay">
    <div id="more_info" @click="click_on_overlay">
      <div class="category">Kategoria: {{ category_filter(selected_data.category) }}</div>
      <hr>
      <div id="title_box">
        <div class="title">{{selected_data.name}}</div>
        <div v-for="(element , index) in selected_data.sub_name" :key="index" class="title"><br>- {{index}}. {{element}}</div>
      </div>
      <div class="description">{{selected_data.text}}</div>
      <hr>
      <div class="qualification">Kwalifikacja prawna</div>
      <div class="qualification_container">
        <div>{{selected_data.law}}</div>
        <div v-if="selected_data.paragraph!==''">{{selected_data.paragraph}}</div>
        <div v-for="(element , index) in selected_data.paragraph_sub" :key="index">{{element}}</div>
      </div>
      <hr>
      <div class="footer_container">
        <div>Kwota: {{ selected_data.tax }}</div>
        <div v-if="selected_data.points !==null">Punkty: {{ selected_data.points }}</div>
        <div v-if="selected_data.code !==null">Kod czynu: {{ selected_data.code }}</div>
      </div>
    </div>
    </div>
    <div id="search_menu">
      <select v-model="selected_option">
        <option v-for="(option, index) in options_category" v-bind:value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
      <input type="text" name="title" placeholder="Wyszukaj" v-model="search_text">
    </div>
    <div id="view">
      <div v-for="(element, index) in filtered_data" :key="index" @click=click_on_tariff_card(element)>
        <tariffCard
        :data="element"
        />
      </div>
    </div>
  </div>
</template>

<script>
import tariffCard from '@/components/tariffCard'
import tariffdata from '@/tariff_data.json'
export default {
  name: 'Tariff',
  components: {
    tariffCard
  },
  computed: {
    filtered_data () {
      // TODO remove comment here and work filter
      if (this.selected_option === 'work') return this.tariff_array.filter(element => element.category === '')
      if (!isNaN(parseInt(this.search_text))) return this.tariff_array.filter(limit => limit.min_speed <= parseInt(this.search_text)).filter(limit => limit.max_speed >= parseInt(this.search_text)).filter(visible => visible.visible !== false)
      if (this.selected_option === 'all') return this.tariff_array.filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase())).filter(visible => visible.visible !== false)
      return this.tariff_array.filter(name => name.category.toLowerCase().includes(this.selected_option.toLowerCase())).filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase())).filter(visible => visible.visible !== false)
    }
  },
  data () {
    return {
      options_category: [
        { value: 'all', text: 'Wszystkie wykroczenia' },
        { value: 'accident', text: 'Kolizja' },
        { value: 'pedestrian', text: 'Wykroczenia pieszych' },
        { value: 'support', text: 'Wykroczenia pieszych z urz. wsp. ruch/ rowerzystów' },
        { value: 'to_pede', text: 'Wykroczenia wobec pieszych przez poj. mech.' },
        { value: 'non_mech_to_pede', text: 'Wykroczenia wobec pieszych przez poj. inny niż mech.' },
        { value: 'speed', text: 'Prędkość pojazdu' },
        { value: 'lights', text: 'Światła zewnętrzne' },
        { value: 'sign', text: 'Znaki i sygnały' },
        { value: 'belts', text: 'Przewóz osób/ pasy bezp.' },
        { value: 'road', text: 'Karta Parkingowa' },
        { value: 'others', text: 'Pozostałe' },
        { value: 'work', text: 'ROBOCZE !' }
      ],
      tariff_array: tariffdata.tariff_array,
      selected_option: 'all',
      selected_data: {
        category: null,
        name: null,
        text: null,
        tax: null,
        code: null,
        law: null,
        path: null,
        paragraph: null
      },
      search_text: '',
      focus: false
    }
  },
  methods: {
    category_filter (data) {
      if (data === null) return null
      const temp = this.options_category.filter(name => name.value.toLowerCase().includes(data.toLowerCase()))
      return temp[0].text
    },
    focus_delay () {
      this.focus = false
    },
    click_on_tariff_card (data) {
      this.selected_data = data
      const form = document.getElementById('search_menu')
      form.addEventListener('focusout', (event) => {
        this.focus = true
        setTimeout(this.focus_delay, 300)
      })
      if (!this.focus) {
        document.getElementById('overlay').style.visibility = 'visible'
        document.getElementById('overlay_container').style.visibility = 'visible'
        document.getElementById('overlay').style.opacity = '50%'
        document.getElementById('overlay_container').style.opacity = '100%'
      }
    },
    click_on_overlay () {
      setTimeout(this.delay_close, 300)
      document.getElementById('overlay').style.opacity = '0%'
      document.getElementById('overlay_container').style.opacity = '0%'
    },
    delay_close () {
      document.getElementById('overlay').style.visibility = 'hidden'
      document.getElementById('overlay_container').style.visibility = 'hidden'
    }
  }
}
</script>

<style scoped>
#search_menu {
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  background-color: #EE6C4D;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#view {
  margin: 8px;
  height: 100%;
  position: unset;

}
input {
  width: 100%;
  font-size: 18px;
  padding: 0px;
  margin-top: 8px;
}
select {
  width: 100%;
  font-size: 18px;
}
hr {
  border: 1px solid #EE6C4D;
}
.footer_container{
  color: #e0fbfc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#overlay {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  height: 100%;
  z-index: 100;
  opacity: 0%;
  visibility: hidden;
  -webkit-transition: opacity 300ms;
}
#overlay_container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  opacity: 100%;
  visibility: hidden;
  -webkit-transition: opacity 300ms;
}
#more_info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 105;
  background-color: #3d5a80;
  border-radius: 8px;
  padding: 10px;
  width: 80%;
  font-family: 'Readex Pro', sans-serif;
}
#title_box {
  overflow: auto;
  max-height: 300px;
}
.title {
  font-weight: bold;
  color: #EE6C4D;
}
.description {
  font-size: 12px;
  margin: 5px 10px;
  color: #e0fbfc;
}
.category {
  font-size: 12px;
  color: #e0fbfc;
  font-weight: bold;
}
.qualification {
  color: #e0fbfc;
  font-weight: bold;
}
.qualification_container {
  max-height: 225px;
  overflow: auto;
  color: #e0fbfc;
  font-size: 12px;
}
.qualification_container div{
  padding: 10px 2px;
}
@media only screen and (min-width: 560px) {
  .search_menu {
    flex-direction: row;
  }
  input {
    margin-top: 0px;
    margin-left: 10px;
    font-size: 20px;
  }
  select {
    font-size: 20px;
  }
}
@media only screen and (max-height: 500px) {
  .qualification_container {
    max-height: 75px;
  }
  #title_box {
    max-height: 75px;
    font-size: 14px;
  }
}
</style>
