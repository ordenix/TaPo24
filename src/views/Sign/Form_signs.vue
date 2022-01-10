<template>
  <div>
  <div id="search">
    <input type="text" name="title" placeholder="Wyszukaj" v-model="search_text">
  </div>
    <div class="main">
      <div v-for="(element, index) in filtered_data" :key="index">
        <signCard :sign_data="element"/>
      </div>
    </div>
  </div>
</template>

<script>
import ASignData from '@/A_sign_data.json'
import BSignData from '@/B_sign_data.json'
import CSignData from '@/C_sign_data.json'
import DSignData from '@/D_sign_data.json'
import signCard from '@/components/signCard'
export default {
  name: 'B_sign.vue',
  components: {
    signCard
  },
  computed: {
    filtered_data () {
      return this.sign_data.filter(element => element.name.toLowerCase().includes(this.search_text.toLowerCase()) || element.description.toLowerCase().includes(this.search_text.toLowerCase()))
    }
  },
  data () {
    return {
      search_text: '',
      sign_data: []
    }
  },
  mounted () {
    if (this.$route.params.sign_category === 'A') {
      this.sign_data = ASignData.sign_array
    }
    if (this.$route.params.sign_category === 'B') {
      this.sign_data = BSignData.sign_array
    }
    if (this.$route.params.sign_category === 'C') {
      this.sign_data = CSignData.sign_array
    }
    if (this.$route.params.sign_category === 'D') {
      this.sign_data = DSignData.sign_array
    }
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout.scss";

.main {
  padding: 10px 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}
@media only screen and (min-width: 700px) {
  .main {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
@media only screen and (min-width: 1000px) {
  .main {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}
</style>
