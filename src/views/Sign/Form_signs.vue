<template>
  <div>
  <div id="search_top_bar2">
    <input style="border-radius: 15px; padding: 5px;" type="text" name="title" placeholder="Wyszukaj" v-model="search_text">
  </div>
    <div class="main">
      <div v-for="(element, index) in filtered_data" :key="index" @click="signClick(element.name, element.link_id)">
        <signCard :sign_data="element"/>
      </div>
    </div>
  </div>
</template>

<script>
import ASignData from '@/views/Data/A_sign_data.json'
import BSignData from '@/views/Data/B_sign_data.json'
import CSignData from '@/views/Data/C_sign_data.json'
import DSignData from '@/views/Data/D_sign_data.json'
import FSignData from '@/views/Data/F_sign_data.json'
import PSignData from '@/views/Data/P_sign_data.json'
import SSignData from '@/views/Data/S_sign_data.json'
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
  methods: {
    signClick (name, id) {
      this.$router.push({ name: 'SignDetails', params: { sign_category: this.$route.params.sign_category, sign_name: name, tariffId: id } })
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
    if (this.$route.params.sign_category === 'F') {
      this.sign_data = FSignData.sign_array
    }
    if (this.$route.params.sign_category === 'P') {
      this.sign_data = PSignData.sign_array
    }
    if (this.$route.params.sign_category === 'S') {
      this.sign_data = SSignData.sign_array
    }
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout";

.search_top_bar2{
  border-radius: 15px;
}
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
