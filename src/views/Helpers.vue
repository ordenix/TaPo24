<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="goto('/postal_code/')">
        <div class="icon"><i class="fas fa-envelope"></i></div>
        <div class="label">Kody pocztowe</div>
      </div>
      <div class="element" @click="goto_web('https://www.ufg.pl/infoportal/faces/pages_home-page/Page_4d98135c_14e2b8ace27__7ff1/Pagee0e22f3_14efe6adc05__7ff1/Page4d024e07_14f0a824115__7ff6?_afrLoop=3753003479910681&_afrWindowMode=0&_adf.ctrl-state=182qsvy3xd_29')">
        <div class="icon"><i class="fas fa-car-crash"></i></div>
        <div class="label">Link do sprawdzenia OC w UFG</div>
      </div>
      <div class="element" @click="goto_web('https://moj.gov.pl/uslugi/engine/ng/index?xFormsAppName=UprawnieniaKierowcow&xFormsOrigin=EXTERNAL')">
        <div class="icon"><i class="fas fa-id-card"></i></div>
        <div class="label">Link do sprawdzenia uprawnień</div>
      </div>
      <div class="element" @click="goto_web('https://historiapojazdu.gov.pl/')">
        <div class="icon"><i class="fas fa-history"></i></div>
        <div class="label">Link do historii pojazdu</div>
      </div>
      <div class="element" @click="goto('/Points_Calc/')">
        <div class="icon"><i class="fas fa-calculator"></i></div>
        <div class="label">Kalkulator punktów</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Helpers.vue',
  methods: {
    goto (path) {
      this.$router.push({ path: path })
    },
    goto_web (path) {
      window.open(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import "grid";

</style>
