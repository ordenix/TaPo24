<template>
  <div>
    <div class="flex_box">
      <div class="master_title">Szczegóły znaku {{filtered_data[0].name}}</div>
      <img :src="require(`../../assets/${filtered_data[0].path}`)" alt="Sign"/>
      <div class="master_container">
        <div class="master_title">Opis znaku:</div>
        <hr>
        <div class="description">{{filtered_data[0].description}}</div>
      </div>
      <div class="master_container" v-if="tariff">
        <div class="master_title">Taryfikator:</div>
        <hr>
        <div class="description2">{{tariff.text}}</div>
        <div class="description">{{tariff.name}}</div>
        <hr>
        <div class="footer">
          <div>Kwota: {{tariff.tax}}</div>
          <div>Punkty: {{tariff.points}}</div>
          <div>Kod czynu: {{tariff.code}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ASignData from '@/A_sign_data.json'
import BSignData from '@/B_sign_data.json'
import CSignData from '@/C_sign_data.json'
import DSignData from '@/D_sign_data.json'
import FSignData from '@/F_sign_data.json'
import PSignData from '@/P_sign_data.json'
import SSignData from '@/S_sign_data.json'
import tariffData from '@/tariff_data.json'

export default {
  name: 'SignDetails.vue',
  data () {
    return {
      sign_data: [],
      tariff: null
    }
  },
  computed: {
    filtered_data () {
      return this.sign_data.filter(element => element.name.toLowerCase() === this.$route.params.sign_name.toLowerCase())
    }
  },
  created () {
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
    this.tariff = tariffData.tariff_array[this.$route.params.tariffId]
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout.scss";
img {
  width: 300px;
  height: 300px;
  padding: 10px 0;
}
.flex_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
}
.description{
  color: #e0fbfc;
  font-family: $text-family;
  text-align: center;
  font-size: 18px;
}
.description2{
  color: #e0fbfc;
  font-family: $text-family;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0;
}
.master_container > .master_title {
  color: #e0fbfc;
}
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-family: $text-family;
  color: #e0fbfc;
}

</style>
