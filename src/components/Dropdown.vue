<template>
  <div class="select_list">
    <div class="dropdown2" >
      <div @click="show_list">
      <input ref="dropdown_select" v-model="select_value" class="dropdown-input2" type="search" placeholder="Wyszukaj" @click="show_list" disabled="disabled"/>
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
        { value: 'others', text: 'Pozostałe' },
        { value: 'prevention', text: 'Prewencja' }
      ],
      select_value: 'Wszystkie wykroczenia',
      timer2: null,
      show: false
    }
  },
  mounted () {
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
    show_list () {
      this.show = true
      console.log('klik')
      this.clear_timeout()
      document.getElementById('dropdown-list2').style.visibility = 'visible'
      this.timer2 = setTimeout(this.hide_list, 3800)
    },
    clear_timeout () {
      window.clearTimeout(this.timer2)
    },
    category_filter (data) {
      if (data === null) return null
      const temp = this.options_category.filter(name => name.value.toLowerCase().includes(data.toLowerCase()))
      return temp[0].text
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
  width: 100%;
  cursor: pointer;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
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
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow: auto;
  margin-top: 4px;
  background: #ffffff;
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
  border-radius: 5px;
  right: 0;
  z-index: 2;
  border: none;
  height: 100%;
  cursor: pointer;
  color: black;
  transform: translateX(2px);
}
</style>
