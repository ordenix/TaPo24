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
import ASignData from '@/views/Data/A_sign_data.json'
import BSignData from '@/views/Data/B_sign_data.json'
import CSignData from '@/views/Data/C_sign_data.json'
import DSignData from '@/views/Data/D_sign_data.json'
import FSignData from '@/views/Data/F_sign_data.json'
import PSignData from '@/views/Data/P_sign_data.json'
import SSignData from '@/views/Data/S_sign_data.json'
import tariffData from '@/views/Data/tariff_data.json'
import ATBTSignData from '@/views/Data/ATBT_sign_data.json'
import ESignData from '@/views/Data/E_sign_data.json'
import GSignData from '@/views/Data/G_sign_data.json'
import RSignData from '@/views/Data/R_sign_data.json'
import TSignData from '@/views/Data/T_sign_data.json'
import WSignData from '@/views/Data/W_sign_data.json'

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
    if (this.$route.params.sign_category === 'ATBT') {
      this.sign_data = ATBTSignData.sign_array
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
    if (this.$route.params.sign_category === 'E') {
      this.sign_data = ESignData.sign_array
    }
    if (this.$route.params.sign_category === 'F') {
      this.sign_data = FSignData.sign_array
    }
    if (this.$route.params.sign_category === 'G') {
      this.sign_data = GSignData.sign_array
    }
    if (this.$route.params.sign_category === 'P') {
      this.sign_data = PSignData.sign_array
    }
    if (this.$route.params.sign_category === 'R') {
      this.sign_data = RSignData.sign_array
    }
    if (this.$route.params.sign_category === 'S') {
      this.sign_data = SSignData.sign_array
    }
    if (this.$route.params.sign_category === 'T') {
      this.sign_data = TSignData.sign_array
    }
    if (this.$route.params.sign_category === 'W') {
      this.sign_data = WSignData.sign_array
    }
    this.tariff = tariffData.tariff_array[this.$route.params.tariffId]
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped lang="scss">
@import "../main_layout";
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
