<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="globalGoTo('/postal_code/', 'module Postal Code')">
        <div class="icon"><i class="fas fa-envelope"></i></div>
        <div class="label">Kody pocztowe</div>
      </div>
      <div class="element" @click="globalGoTo('https://www.ufg.pl/infoportal/faces/pages_home-page/Page_4d98135c_14e2b8ace27__7ff1/Pagee0e22f3_14efe6adc05__7ff1/Page4d024e07_14f0a824115__7ff6?_afrLoop=3753003479910681&_afrWindowMode=0&_adf.ctrl-state=182qsvy3xd_29', 'Link to Insurance', 'web')">
        <div class="icon"><i class="fas fa-car-crash"></i></div>
        <div class="label">Link do sprawdzenia OC w UFG</div>
      </div>
      <div class="element" @click="globalGoTo('https://moj.gov.pl/uslugi/engine/ng/index?xFormsAppName=UprawnieniaKierowcow&xFormsOrigin=EXTERNAL','Link to driver licence', 'web')">
        <div class="icon"><i class="fas fa-id-card"></i></div>
        <div class="label">Link do sprawdzenia uprawnień</div>
      </div>
      <div class="element" @click="globalGoTo('https://historiapojazdu.gov.pl/', 'Link to car history', 'web')">
        <div class="icon"><i class="fas fa-history"></i></div>
        <div class="label">Link do historii pojazdu</div>
      </div>
      <div class="element" @click="globalGoTo('/Validation/', null)">
        <div class="icon"><i class="fas fa-clipboard-check"></i></div>
        <div class="label">Kontrola autentyczności dokumentów</div>
      </div>
      <div class="element" @click="globalGoTo('/Points_Calc/','module Points Calculator')">
        <div class="icon"><i class="fas fa-calculator"></i></div>
        <div class="label">Kalkulator punktów</div>
      </div>
      <div class="element" @click="globalGoTo('https://ckt.uc.ost112.gov.pl/','link to telephone book', 'web')">
        <div class="icon"><i class="fas fa-tty"></i></div>
        <div class="label">Link do książki telefonicznej (Policja)</div>
      </div>
      <div class="element" @click="globalGoTo('https://specbrands.pl/','link to specbrands', 'web')">
        <div class="icon"><img :src="require(`@/assets/others/logo_black.png`)" alt="Sign"/></div>
        <div class="label">Sklep mundurowy</div>
      </div>
      <div v-if="false" class="element" @click="globalGoTo('/SPB/home/', 'SPB')">
        <div class="icon"><i class="fa-solid fa-gun"></i></div>
        <div class="label">ŚPB</div>
      </div>
      <div class="element" @click="globalGoTo('/SpeedCalc/', 'SPEED CALC')">
        <div class="icon"><i class="fa-solid fa-gauge-high"></i></div>
        <div class="label">Kalkulator prędkości</div>
      </div>
       <div class="element" @click="globalGoTo('/DrunkCalc/', 'DRUNK CALC')">
        <div class="icon"><i class="fa-solid fa-watch-calculator"></i></div>
        <div class="label">Przelicznik mg/l - ‰</div>
      </div>
      <div class="element" @click="globalGoTo('https://holdtheline.pl/category/blog/','link to htl blog', 'web')">
        <div class="icon"><i class="fa-solid fa-blog"></i></div>
        <div class="label">Blog #HoldTheLine</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Helpers.vue',
  data () {
    return {
      payload: {
        moduleName: null
      }
    }
  },
  methods: {
    goto (path, moduleName) {
      const headers = {
        'Content-Type': 'application/json'
      }
      this.payload.moduleName = moduleName
      axios
        .post(this.$store.state.path_api + '/module_clicked', this.payload, { headers })
      this.$router.push({ path: path })
    },
    goto_web (path, moduleName) {
      const headers = {
        'Content-Type': 'application/json'
      }
      this.payload.moduleName = moduleName
      if (navigator.onLine) {
        console.log('online')
      } else {
        console.log('offline')
      }
      axios
        .post(this.$store.state.path_api + '/module_clicked', this.payload, { headers })
      window.open(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";
img {
  width: 80px;
}
</style>
