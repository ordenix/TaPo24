<template>
  <div id="main">
    <div id="pdf_container">
      <div class="top_bar">
        <div class="close" @click="close_pdf">Zamknij <i class="fas fa-times"></i></div>
      </div>
      <div id="adobe-dc-view"></div>
    </div>
    <div v-if="true" class="container">
      <div v-for="(element, index) in law_list" v-bind:key="index">
        <div class="element" @click="gen_pdf(element.path, element.name)">
          <div class="icon"><i :class="[element.icon]"></i></div>
          <div class="label">{{ element.name }}</div>
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
  data () {
    return {
      adobe_key: '2023be3e7c604da78217a23dda3c8229',
      adobeApiReady: false,
      law_list: [
        { name: 'Prawo o ruchu drogowym', path: 'PRD.pdf', icon: 'fas fa-car' },
        { name: 'Kodeks Wykroczeń', path: 'KW.pdf', icon: 'fas fa-gavel' },
        { name: 'Roz. w sprawie kontroli ruchu drogowego', path: 'RWSK.pdf', icon: 'fas fa-car-crash' },
        { name: 'Ustawa o transporcie drogowym', path: 'TD.pdf', icon: 'fas fa-truck' }
      ],
      master_path: 'https://tapo24.pl/static/'
    }
  },
  methods: {
    close_pdf () {
      document.getElementById('pdf_container').style.visibility = 'hidden'
      this.$store.state.open_pdf = false
    },
    gen_pdf (path, fileName) {
      this.adobeDCView = new window.AdobeDC.View({ clientId: this.adobe_key, divId: 'adobe-dc-view' })
      this.adobeDCView.previewFile({
        content: { location: { url: this.master_path + path } },
        metaData: { fileName: fileName }
      })
      document.getElementById('pdf_container').style.visibility = 'visible'
      this.$store.state.open_pdf = true
    }
  },
  mounted () {
    const AdobeDC = document.createElement('script')
    AdobeDC.setAttribute('src', 'https://documentcloud.adobe.com/view-sdk/main.js')
    document.head.appendChild(AdobeDC)
    document.addEventListener('adobe_dc_view_sdk.ready', () => {
      this.adobeApiReady = true
    })
  }
}
</script>

<style scoped lang="scss">
#main {
  padding: 10px 10px;
}
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
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}
.element {
  background-color: #EE6C4D;
  height: 100px;
  padding: 3px 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-family: 'Readex Pro', sans-serif;
}
.icon {
  font-size: 30px;
  text-align: center;
}
.label {
  font-size: 15px;
  text-align: center;
}

@media only screen and (min-width: 700px) {
  .container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
