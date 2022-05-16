<template>
  <div class="select_list">
    <div class="dropdown2" >
      <div @click="click_on_input">
      <input ref="dropdown_select" v-model="select_value" class="dropdown-input2" type="search" placeholder="Wyszukaj" @click="click_on_input" disabled="disabled"/>
        <button><i class="fas fa-caret-down"></i></button>
      </div>
      <div id="dropdown-list2">
        <div @click="click(item)" v-for="item in options_category" :key="item.text" class="dropdown-item2">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dropdown',
  computed: {
    ...mapState([
      'selected_tariff_data'
    ])
  },
  data () {
    return {
      options_category: [
        { value: 'all', text: 'Wszystkie wykroczenia' },
        { value: 'prevention', text: 'Prewencja' },
        { value: 'favorites', text: 'Ulubione' },
        { value: 'accident', text: 'Kolizja' },
        { value: 'pedestrian', text: 'Wykroczenia pieszych' },
        { value: 'support', text: 'Wykroczenia pieszych z urz. wsp. ruch/ rowerzystów' },
        { value: 'to_pede', text: 'Wykroczenia wobec pieszych przez poj. mech.' },
        { value: 'non_mech_to_pede', text: 'Wykroczenia wobec pieszych przez poj. inny niż mech.' },
        { value: 'speed', text: 'Prędkość pojazdu/ wyprzedzanie' },
        { value: 'lights', text: 'Światła zewnętrzne' },
        { value: 'sign', text: 'Znaki i sygnały' },
        { value: 'belts', text: 'Przewóz osób/ pasy bezp.' },
        { value: 'invalid', text: 'Karta Parkingowa' },
        { value: 'stop', text: 'Postój/Zatrzymanie/ Cofanie/ Zawracanie/ Holowanie' },
        { value: 'allow', text: 'Dopuszczenie/ Kierowanie' },
        { value: 'package', text: 'Przewóz ładunku/ Tablice/ Przejazd Kolejowy lub tramw.' },
        { value: 'others', text: 'Pozostałe' }
      ],
      select_value: 'Wszystkie wykroczenia',
      timer2: null,
      show: false
    }
  },
  mounted () {
    const list = document.getElementById('dropdown-list2')
    list.addEventListener('scroll', () => {
      this.clear_timeout()
      this.timer2 = setTimeout(this.hide_list, 2000)
    })
    this.select_value = this.category_filter(this.$store.state.selected_tariff_data.options_category)
  },
  methods: {
    click (item) {
      this.clear_timeout()
      this.select_value = item.text
      this.hide_list()
      this.$emit('on-item-selected', item)
    },
    hide_list () {
      this.show = false
      document.getElementById('dropdown-list2').style.visibility = 'hidden'
    },
    add_event () {
      window.addEventListener('click', event => {
        this.hide_list()
      }, true)
    },
    show_list () {
      this.show = true
      this.clear_timeout()
      document.getElementById('dropdown-list2').style.visibility = 'visible'
      this.timer2 = setTimeout(this.hide_list, 2000)
      setTimeout(this.add_event, 1000)
    },
    clear_timeout () {
      window.clearTimeout(this.timer2)
    },
    category_filter (data) {
      if (data === null) return null
      const temp = this.options_category.filter(name => name.value.toLowerCase().includes(data.toLowerCase()))
      return temp[0].text
    },
    click_on_input () {
      console.log('sssssssssssss')
      if (this.show) {
        this.show = false
        this.clear_timeout()
        this.hide_list()
      } else {
        this.show = true
        this.show_list()
      }
    }
  }
}
</script>

<style scoped>
.select_list{
  z-index: 1000000;
}
.dropdown2{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 1000;
}
.dropdown-input2, .dropdown-selected2{
  cursor: pointer;
  padding: 12px 8px;
  width: 100%;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-left: 0;
}
.dropdown-input2:focus, .dropdown-selected2:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input2::placeholder{
  opacity: 0.7;
}
.dropdown-selected2{
  font-weight: bold;
  cursor: pointer;
}
#dropdown-list2{
  font-family: 'Montserrat', sans-serif;
  color: #9fa3b1;
  position: absolute;
  width: 100%;
  max-height: 400px;
  overflow: auto;
  margin-top: 4px;
  background: #edf2f7;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  visibility: hidden;
}
.dropdown-item2{
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item2:hover{
  background: #edf2f7;
}
button {
  position: absolute;
  right: 0;
  z-index: 2;
  border: none;
  border-right: 2px solid #9fa3b1;
  top: 15%;
  height: 70%;
  cursor: pointer;
  color: #3d5a80;
  background: #edf2f7;
  transform: translateX(2px);
}
@media only screen and (min-width: 560px) {
  .dropdown-input2, .dropdown-selected2 {
  margin-right: 105px;
  }
}
</style>
