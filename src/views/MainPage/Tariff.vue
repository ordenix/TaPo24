<template>
  <div class="main_app">
    <div id="overlay" @click="click_on_overlay"></div>
      <div id="overlay_container" @click="click_on_overlay">
    <div id="more_info" @click="click_on_overlay">
      <div class="header">
        <div class="category">Kategoria: {{ category_filter(selected_data.category) }}</div>
        <div class="favorites" @click="click_on_favorites">
          <div v-if="favorites_array.indexOf(selected_data.name)!==-1">★</div>
          <div v-if="favorites_array.indexOf(selected_data.name)===-1">☆</div>
          <div class="favorites-label" v-if="favorites_array.indexOf(selected_data.name)===-1">Dodaj do ulubionych</div>
          <div class="favorites-label" v-if="favorites_array.indexOf(selected_data.name)!==-1">Usuń z ulubionych</div>
        </div>
      </div>
      <hr>
      <div id="title_box">
        <div class="title">{{selected_data.name}}</div>
        <div v-for="(element , index) in selected_data.sub_name" :key="index" class="title"><br>- {{index}}. {{element}}</div>
      </div>
      <div class="description">{{selected_data.text}}</div>
      <hr>
      <div class="qualification">Kwalifikacja prawna</div>
      <div class="qualification_container">
        <div v-if="selected_data.law!=='' && selected_data.law">{{selected_data.law}}</div>
        <div v-for="(element , index) in selected_data.law_sub" :key="index">{{element}}</div>
        <div v-if="selected_data.paragraph!=='' && selected_data.paragraph">{{selected_data.paragraph}}</div>
        <div v-for="(element , index) in selected_data.paragraph_sub" :key="index+100">{{element}}</div>
      </div>
      <hr>
      <div class="footer_container">
        <div>Kwota: {{ selected_data.tax }}</div>
        <div v-if="selected_data.points !==null && selected_data.code!=='Z 01'">Punkty: {{ selected_data.points }}</div>
        <div v-if="selected_data.points !==null && selected_data.code==='Z 01'">Punkty: - </div>
        <div v-if="selected_data.code !=='null'">Kod czynu: {{ selected_data.code }}</div>
      </div>
    </div>
    </div>
    <div id="search_top_bar2">
      <select v-model="selected_option" v-if="false">
        <option v-for="(option, index) in options_category" v-bind:value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
      <input v-if="!new_search" type="text" name="title" placeholder="Wyszukaj" v-model="search_text">
      <div v-if="new_search" class="new_search">
        <Dropdown
          v-if="true" class="new_select"
          @on-item-selected="new_drop_down_selected($event)"
        />
        <div class="dropdown">
            <input ref="dropdowninput" v-model="inputValue" class="dropdown-input" type="search" placeholder="Wyszukaj" @click="show_suggestion_list"/>
          <div v-show="inputValue && apiLoaded" id="dropdown-list">
            <div @click="selectItem(item)" v-show="itemVisible(item)" v-for="item in itemList" :key="item.suggestion" class="dropdown-item">
              {{ item.suggestion }}
            </div>
          </div>
        </div>
      </div>
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
import tariffdata from '@/views/Data/tariff_data.json'
import { mapState } from 'vuex'
import axios from 'axios'
import Dropdown from '@/components/Dropdown'
export default {
  name: 'Tariff',
  components: {
    tariffCard,
    Dropdown
  },
  computed: {
    ...mapState([
      'scroll_pos_tariff',
      'selected_tariff_data',
      'favorites_array'
    ]),
    filtered_data () {
      // TODO remove comment here and work filter
      if (this.selected_option === 'work') return this.tariff_array.filter(element => element.category === '').filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase()))
      if (this.selected_option === 'favorites') return this.tariff_array.filter(element => this.favorites_array.includes(element.name)).filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase()))
      if (!isNaN(parseInt(this.search_text))) return this.tariff_array.filter(limit => limit.min_speed <= parseInt(this.search_text)).filter(limit => limit.max_speed >= parseInt(this.search_text)).filter(visible => visible.visible !== false)
      if (this.selected_option === 'all') return this.tariff_array.filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase()) || name.code.toLowerCase().includes(this.search_text.toLowerCase())).filter(visible => visible.visible !== false)
      return this.tariff_array.filter(name => name.category.toLowerCase().includes(this.selected_option.toLowerCase())).filter(name => name.name.toLowerCase().includes(this.search_text.toLowerCase()) || name.code.toLowerCase().includes(this.search_text.toLowerCase())).filter(visible => visible.visible !== false)
    }
  },
  created () {
    if (!navigator.onLine) this.new_search = false
    // const log = document.getElementById('buttonIn')
    // document.addEventListener('keyup', () => {
    // this.get_Sugestion()
    // })
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('popstate', () => {
      if (this.$store.state.ini_back && this.open_special_card) {
        this.$store.state.ini_back = false
        this.open_special_card = false
        this.$store.state.selected_tariff_data.options_category = this.selected_option
        this.$store.state.selected_tariff_data.search_text = this.search_text
        this.$router.push({ path: '/tariff/' })
      }
    })
  },
  mounted () {
    const inputText = document.getElementById('dropdown-list')
    inputText.addEventListener('scroll', () => {
      this.clear_timeout()
      this.timer = setTimeout(this.hide_suggestion_list, 1800)
    })
    window.scrollTo(0, this.scroll_pos_tariff)
    setTimeout(this.set_scroll_pos, 1)
  },
  data () {
    return {
      dropdownSelection: {},
      new_search: true,
      open_special_card: false,
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
      focus: false,
      on_favorites: false,
      selectedItem: {},
      inputValue: '',
      itemList: [],
      apiLoaded: false,
      hidden_mask: false,
      apiUrl: 'https://elastic-enterprise-search.otavi.pl/api/as/v1/engines/tapo24/query_suggestion',
      apiUrl2: 'https://elastic-enterprise-search.otavi.pl/api/as/v1/engines/tapo24/search.json',
      apiUrl3: 'https://elastic-enterprise-search.otavi.pl/api/as/v1/engines/tapo24/click',
      timer: null
    }
  },
  methods: {
    new_drop_down_selected (data) {
      this.selected_option = data.value
    },
    hide_suggestion_list () {
      if (this.inputValue !== '') this.requestData()
      this.hidden_mask = false
      document.getElementById('dropdown-list').style.visibility = 'hidden'
    },
    show_suggestion_list () {
      this.clear_timeout()
      this.hidden_mask = true
      document.getElementById('dropdown-list').style.visibility = 'visible'
      this.timer = setTimeout(this.hide_suggestion_list, 1800)
    },
    set_scroll_pos () {
      window.scrollTo(0, this.scroll_pos_tariff)
      this.$store.state.ini_back = true
      this.selected_option = this.$store.state.selected_tariff_data.options_category
      this.search_text = this.$store.state.selected_tariff_data.search_text
    },
    category_filter (data) {
      if (data === null) return null
      const temp = this.options_category.filter(name => name.value.toLowerCase().includes(data.toLowerCase()))
      return temp[0].text
    },
    focus_delay () {
      this.focus = false
    },
    click_on_tariff_card (data) {
      if (this.hidden_mask) {
        this.hide_suggestion_list()
      } else {
        if (navigator.onLine && data.id) {
          // console.log(data.id)
          const payload = {
            query: this.inputValue,
            document_id: data.id
          }
          const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer search-u3qcx2mkbm73x1tdd8mpi4tj'
          }
          axios.post(this.apiUrl3, payload, { headers })
        }
        this.open_special_card = true
        this.selected_data = data
        const form = document.getElementById('search_top_bar2')
        form.addEventListener('focusout', () => {
          // this.hide_mask()
          this.focus = true
          setTimeout(this.focus_delay, 300)
        })
        if (!this.focus) {
          document.getElementById('overlay').style.visibility = 'visible'
          document.getElementById('overlay_container').style.visibility = 'visible'
          document.getElementById('overlay').style.opacity = '50%'
          document.getElementById('overlay_container').style.opacity = '100%'
        }
      }
    },
    click_on_favorites () {
      this.on_favorites = true
      setTimeout(this.change_on_favourites, 300)
      if (this.favorites_array.indexOf(this.selected_data.name) === -1) {
        // add to favor
        this.$store.commit('ADD_FAVORITES_TO_ARRAY', this.selected_data.name)
      } else {
        // remove from favor
        this.$store.commit('REMOVE_FAVORITES_FROM_ARRAY', this.selected_data.name)
      }
    },
    change_on_favourites () {
      this.on_favorites = false
    },
    click_on_overlay () {
      if (!this.on_favorites) {
        setTimeout(this.delay_close, 300)
        document.getElementById('overlay').style.opacity = '0%'
        document.getElementById('overlay_container').style.opacity = '0%'
      }
    },
    delay_close () {
      this.open_special_card = false
      document.getElementById('overlay').style.visibility = 'hidden'
      document.getElementById('overlay_container').style.visibility = 'hidden'
    },
    onScroll (e) {
      if (this.$store.state.ini_back) {
        this.$store.state.scroll_pos_tariff = e.target.documentElement.scrollTop
      }
    },
    resetSelection () {
      this.selectedItem = {}
      this.inputValue = ''
      this.itemList = []
      this.tariff_array = tariffdata.tariff_array
      this.hide_suggestion_list()
      this.$nextTick(() => this.$refs.dropdowninput.focus())
    },
    requestData () {
      if (this.inputValue !== '') {
        const data = {
          query: this.inputValue.toLowerCase(),
          page: {
            size: 150,
            current: 1
          }
        }
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer search-u3qcx2mkbm73x1tdd8mpi4tj'
        }
        axios.post(this.apiUrl2, data, { headers }).then(response => {
          // const test = response.data.results[0].code
          this.tariff_array = []
          // console.log(response.data.results)
          for (let i = 0; i < response.data.results.length; i++) {
            const patern = {
              id: '',
              category: 'others',
              name: '',
              text: '',
              tax: '',
              points: '',
              code: '',
              law: '',
              paragraph: '',
              paragraph_sub: '',
              law_sub: '',
              path: '',
              sub_name: '',
              visible: '',
              max_speed: '',
              min_speed: ''
            }
            patern.id = response.data.results[i].id.raw
            patern.category = response.data.results[i].category.raw
            patern.name = response.data.results[i].name.raw
            patern.text = response.data.results[i].text.raw
            patern.tax = response.data.results[i].tax.raw
            patern.points = response.data.results[i].points.raw
            patern.code = response.data.results[i].code.raw
            if (response.data.results[i].law) {
              patern.law = response.data.results[i].law.raw
            } else patern.law = null
            if (response.data.results[i].sub_name) {
              patern.sub_name = response.data.results[i].sub_name.raw
            } else patern.sub_name = null
            if (response.data.results[i].max_speed) {
              patern.max_speed = response.data.results[i].max_speed.raw
            } else patern.max_speed = null
            if (response.data.results[i].min_speed) {
              patern.min_speed = response.data.results[i].min_speed.raw
            } else patern.min_speed = null
            if (response.data.results[i].visible) {
              patern.visible = false
            } else patern.visible = null
            if (response.data.results[i].paragraph) {
              patern.paragraph = response.data.results[i].paragraph.raw
            } else patern.paragraph = null
            if (response.data.results[i].paragraph_sub) {
              patern.paragraph_sub = JSON.parse(response.data.results[i].paragraph_sub.raw)
            } else patern.paragraph_sub = null
            if (response.data.results[i].law_sub) {
              patern.law_sub = JSON.parse(response.data.results[i].law_sub.raw)
            } else patern.law_sub = null
            // patern.law = response.data.results[i].law.raw
            // patern.paragraph = response.data.results[i].paragraph.raw
            patern.path = response.data.results[i].path.raw
            this.tariff_array.push(patern)
            // console.log(response.data.results[i].code.raw)
          }
          // console.log(test.raw)
          // patern.code = test.raw
          // this.tariff_array.push(patern)
          // for (const element of Object.keys(response.data.results)) {
          // console.log(element.code)
          // }
          // const obj = JSON.parse(response.data.results)
          // this.tariff_array = obj
          // console.log(obj.results.documents)
          // this.itemList = obj.results.documents
        })
      } else {
      }
    },
    selectItem (theItem) {
      console.log(theItem)
      this.selectedItem = theItem
      this.inputValue = theItem.suggestion
      if (this.inputValue !== '') this.requestData()
    },
    itemVisible (item) {
      const currentName = item.suggestion.toLowerCase()
      const currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    get_Sugestion () {
      this.clear_timeout()
      console.log(this.inputValue)
      if (this.inputValue !== '') {
        for (let i = 0; i < 10000; i++) {
        }
        this.show_suggestion_list()
        const data = {
          query: this.inputValue
        }
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer search-u3qcx2mkbm73x1tdd8mpi4tj'
        }
        axios.post(this.apiUrl, data, { headers }).then(response => {
          const obj = JSON.parse(response.request.response)
          // console.log(obj.results.documents)
          this.itemList = obj.results.documents
          this.apiLoaded = true
        })
      } else {
        this.itemList = []
        this.hide_suggestion_list()
        this.tariff_array = tariffdata.tariff_array
      }
      this.clear_timeout()
      this.timer = setTimeout(this.hide_suggestion_list, 1800)
    },
    clear_timeout () {
      window.clearTimeout(this.timer)
    }
  },
  watch: {
    inputValue: function () {
      this.get_Sugestion()
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
#search_top_bar2{
  z-index: 9;
}
#view {
  margin: 8px;
  height: 100%;
  position: unset;
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
  opacity: 0;
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.favorites {
  width: auto;
  color: #e0fbfc;
  font-family: $text-family;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.favorites-label {
  font-size: 10px;
}

.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 500;
}
.dropdown-input, .dropdown-selected{
  width: auto;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
  margin-left: 0;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
#dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow: auto;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.new_search2{
  width: 100%;
}
.new_select {
  margin-bottom: 5px;
}
@media only screen and (min-width: 560px) {
  input {
    margin-top: 0;
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
