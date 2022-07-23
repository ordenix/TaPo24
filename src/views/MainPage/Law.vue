<template>
  <div>
    <div id="search_top_bar2">
      <input type="text" style="border-radius: 10px; color: #6f768d; padding: 5px;" placeholder="Wprowadź nazwę aktu" v-model="serach_text">
      <div v-if="false" id="options_container">
        <div class="option">
          <input type="checkbox" class="checkBox" name="scales">
          <div>Wszystko</div>
        </div>
        <div class="option">
          <input type="checkbox" class="checkBox" name="scales">
          <div>Ustawy</div>
        </div>
        <div class="option">
          <input type="checkbox" class="checkBox" name="scales">
          <div>Rozporządzenia</div>
        </div>
        <div class="option">
          <input type="checkbox" class="checkBox" name="scales">
          <div>Akty policyjne</div>
        </div>
      </div>
    </div>
    <div id="main">
      <div id="pdf_container">
        <div class="top_bar">
          <div class="close" @click="close_pdf">Zamknij <i class="fas fa-times"></i></div>
        </div>
        <div id="adobe-dc-view"></div>
      </div>
      <div v-if="true" class="container">
        <div v-for="(element, index) in filtered_law_list" v-bind:key="index">
          <div class="element" @click="gen_pdf(element.path, element.name)">
            <div class="icon"><i :class="[element.icon]"></i></div>
            <div class="label">{{ element.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Law.vue',
  components: {
  },
  created () {
    window.addEventListener('popstate', () => {
      if (this.$store.state.open_pdf) {
        this.$store.state.open_pdf = false
        this.$router.push({ path: '/law/' })
      }
    })
  },
  computed: {
    filtered_law_list () {
      return this.law_list.filter(element => element.name.toLowerCase().includes(this.serach_text.toLowerCase()) ||
      element.short.toLowerCase().includes(this.serach_text.toLowerCase()))
    }
  },
  data () {
    return {
      law_list: [
        { name: 'Prawo o ruchu drogowym', path: 'PRD.pdf', icon: 'fas fa-car', short: 'PRD' },
        { name: 'Kodeks Wykroczeń', path: 'KW.pdf', icon: 'fas fa-gavel', short: 'KW' },
        { name: 'Rozp. ws. kontroli ruchu drogowego', path: 'RWSK.pdf', icon: 'fas fa-car-crash', short: 'none' },
        { name: 'Rozp. ws. wyk. niektórych uprawnień', path: 'RWWNUP.pdf', icon: 'fas fa-book-open', short: 'none' },
        { name: 'Ustawa o transporcie drogowym', path: 'TD.pdf', icon: 'fas fa-truck', short: 'UOT' },
        { name: 'Zarządzenie KGP nr 30KGP', path: '30KGP.pdf', icon: 'fas fa-road', short: '30' },
        { name: 'Ustawa o ŚPB', path: 'SPB.pdf', icon: 'fas fa-crosshairs', short: 'ŚPB' },
        { name: 'Ustawa o Policji', path: 'UOP.pdf', icon: 'fas fa-bookmark', short: 'UOP' },
        { name: 'Ustawa o kierujących', path: 'UOK.pdf', icon: 'fas fa-id-card', short: 'UOK' },
        { name: 'Kodeks Karny', path: 'KK.pdf', icon: 'fas fa-mask', short: 'KK' },
        { name: 'Rozp. znaki i sygnały', path: 'ZSD.pdf', icon: 'fas fa-traffic-light', short: 'zsd' },
        { name: 'Rozp. szczeg. war. ZSD cz1', path: 'ZSD1.pdf', icon: 'fas fa-traffic-light', short: 'zsd' },
        { name: 'Rozp. szczeg. war. ZSD cz2', path: 'ZSD2.pdf', icon: 'fas fa-traffic-light', short: 'zsd' },
        { name: 'Rozp. ws. usuwania pojazdów', path: 'UPOJ.pdf', icon: 'fas fas fa-car-battery', short: 'none' },
        { name: 'Rozp. ws. badań alk. w organizmie', path: 'AL.pdf', icon: 'fas fa-glass-cheers', short: 'alko' },
        { name: 'Rozp. ws. badań na substancje', path: 'KRNARK.pdf', icon: 'fas fa-cannabis', short: 'narko' },
        { name: 'Kodeks postępowania o wykr.', path: 'KPOW.pdf', icon: 'fas fa-book', short: 'KPOW' },
        { name: 'Kodeks postępowania karnego', path: 'KPA.pdf', icon: 'fas fa-book', short: 'KPK' },
        { name: 'Ustawa o bezp. imprez masowych', path: 'UOBIM.pdf', icon: 'fa-solid fa-calendar-check', short: 'UOBIA' },
        { name: 'Ustawa o [...] wyrobów tytoniowych ', path: 'UOZPNUTWT.pdf', icon: 'fa-solid fa-smoking', short: 'Ustawa o ochronie zdrowia przed następstwami używania tytoniu i wyrobów tytoniowych' },
        { name: 'Ustawa o [...] alkoholizmowi', path: 'UWTPA.pdf', icon: 'fa-solid fa-champagne-glasses', short: 'Ustawa o wychowaniu w trzeźwości i przeciwdziałaniu alkoholizmowi UWTPA' },
        { name: 'Ustawa o ochronie zwierząt', path: 'UOOZ.pdf', icon: 'fa-solid fa-dog', short: 'zzzzzzzzzzzzz' },
        { name: 'Ustawa o broni i amunicji', path: 'UOBIA.pdf', icon: 'fa-solid fa-gun', short: 'zzzzzzzzzzzzz' },
        { name: 'Ustawa o przeciwdział. narkomanii', path: 'UOPDN.pdf', icon: 'fa-solid fa-pills', short: 'Ustawa o przeciwdziałaniu narkomanii' }
      ],
      serach_text: ''
    }
  },
  methods: {
    close_pdf () {
      document.getElementById('pdf_container').style.visibility = 'hidden'
      this.$store.state.open_pdf = false
    },
    gen_pdf (path, fileName) {
      this.$router.push({ name: 'PdfViewer', params: { pdf_name: fileName, pdf_path: path } })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";
@import "src/views/main_layout";
#pdf_container {
  overflow: hidden;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  visibility: hidden;
  background-color: #3D5A80;
}
.top_bar {
  background-color: #3D5A80;
  display: flex;
  justify-content: right;
}
.close {
  padding: 10px 10px;
  font-family: 'Readex Pro', sans-serif;
}
.close:hover {
  background-color: #98C1D9;
}
</style>
