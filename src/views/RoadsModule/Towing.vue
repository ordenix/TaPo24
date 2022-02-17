<template>
  <div>
    <div id="search_top_bar2">
      <input type="text" name="title" placeholder="Wyszukaj" v-model="search_text">
    </div>
    <div class="master">
      <div v-for="(element, index) in searchData" :key="index" class="module">
        <div class="title">{{element.condition}}</div>
        <div class="law">{{element.law}}</div>
        <hr>
        <div class="type">Rodzaj: {{element.type}}</div>
        <div class="necessity">Konieczność: {{element.necessity}}</div>
        <div class="necessity">Holowanie na koszt: {{element.cost}}</div>
        <div class="permission" v-if="element.type==='Dyspozycja' && element.permission">Odbiór pojazdu z parkingu wymaga okazania zezwolenia</div>
        <div class="permission" v-if="element.type==='Dyspozycja' && !element.permission">Odbiór pojazdu z parkingu nie wymaga okazania zezwolenia</div>

      </div>
    </div>
  </div>
</template>

<script>
import Towing from '@/views/Data/towing.json'
export default {
  name: 'Towing',
  computed: {
    searchData () {
      return this.dataTowing.filter(element => element.condition.toLowerCase().includes(this.search_text.toLowerCase()))
    }
  },
  data () {
    return {
      dataTowing: [],
      search_text: ''
    }
  },
  mounted () {
    this.dataTowing = Towing.towing_array
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout";
.master {
  padding: 10px;
}
.module {
  background: #3D5A80;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  font-family: $text-family;
  color: #e0fbfc;
}
.title {
  color: #EE6C4D;
  font-weight: bold;
  font-size: 20px;
}
.law{
  color: #e0fbfc;
  font-size: 12px;
}
</style>
