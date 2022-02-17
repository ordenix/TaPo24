<template>
  <div id="main">
    <div v-if="true" class="container">
      <div class="element" @click="globalGoTo('/sign/', 'sign')">
        <div class="icon"><i class="fas fa-map-signs"></i></div>
        <div class="label">Znaki drogowe</div>
      </div>
      <div class="element" @click="globalGoTo('/TypeAccident/', 'qualification accident')">
        <div class="icon"><i class="fas fa-car-crash"></i></div>
        <div class="label">Kwalifikacja zdarzenia</div>
      </div>
      <div class="element" @click="globalGoTo('/ControlList/', 'control list')">
        <div class="icon"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="label">Kody usterek</div>
      </div>
      <div class="element" @click="globalGoTo('/DrivingLicence/', 'category driving licence')">
        <div class="icon"><i class="fas fa-id-card"></i></div>
        <div class="label">Kategorie prawa jazdy</div>
      </div>
      <div class="element" @click="globalGoTo('/DrivingLicenceCode/', 'code driving licence')">
        <div class="icon"><i class="fas fa-glasses"></i></div>
        <div class="label">Kody ograniczeń prawa jazdy</div>
      </div>
      <div class="element" @click="globalGoTo('/DocumentHolding/', 'document holding')">
        <div class="icon"><i class="fas fa-hand-holding"></i></div>
        <div class="label">Zatrzymywanie dokumentów</div>
      </div>
      <div class="element" @click="globalGoTo('/KSIPCode/', 'KSIP code')">
        <div class="icon"><i class="fas fa-info"></i></div>
        <div class="label">Statusy Prawa Jazdy KSIP</div>
      </div>
      <div class="element" @click="globalGoTo('/Lights/', 'Lights')">
        <div class="icon"><i class="fas fa-lightbulb"></i></div>
        <div class="label">Oświetlenie pojazdu</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Road.vue',
  data () {
    return {
    }
  },
  methods: {
    goto (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";

</style>
