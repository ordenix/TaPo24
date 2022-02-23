<template>
  <div class="dropdown">
    <input v-if="true" ref="dropdowninput" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Wyszukaj" @change="onChange"/>
    <div v-else @click="resetSelection" class="dropdown-selected">
      {{ selectedItem }}
    </div>
    <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div @click="selectItem(item)" v-show="itemVisible(item)" v-for="item in itemList" :key="item.suggestion" class="dropdown-item">
        {{ item.suggestion }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      selectedItem: {},
      inputValue: '',
      itemList: [],
      apiLoaded: false,
      apiUrl: 'https://otavi-pl.ent.europe-west3.gcp.cloud.es.io/api/as/v1/engines/es/query_suggestion'
    }
  },
  mounted () {
    this.getList()
  },
  watch: {
    inputValue: function (val) {
      const data = {
        query: this.inputValue
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer search-9p14wcq44phvsdpqm9tj2dvb'
      }
      axios.post(this.apiUrl, data, { headers }).then(response => {
        const obj = JSON.parse(response.request.response)
        console.log(obj.results.documents)
        this.itemList = obj.results.documents
        this.apiLoaded = true
      })
    }
  },
  methods: {
    onChange () {
      console.log('on')
    },
    resetSelection () {
      this.selectedItem = {}
      this.$nextTick(() => this.$refs.dropdowninput.focus())
      this.$emit('on-item-reset')
    },
    selectItem (theItem) {
      this.selectedItem = theItem
      this.inputValue = theItem.suggestion
      this.$emit('on-item-selected', theItem)
    },
    itemVisible (item) {
      const currentName = item.suggestion.toLowerCase()
      const currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    getList () {
      const data = {
        query: 'kto'
      }
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer search-9p14wcq44phvsdpqm9tj2dvb'
      }
      axios.post(this.apiUrl, data, { headers }).then(response => {
        const obj = JSON.parse(response.request.response)
        console.log(obj.results.documents)
        // this.itemList = obj.results.documents
        this.apiLoaded = true
      })
    }
  }
}
</script>

<style>
.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  z-index: 1000;
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
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
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.dropdown-item-flag{
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
</style>
