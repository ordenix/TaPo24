<template>
  <div id="main">
    <div id="pdf_container">
      <div class="top_bar">
        <div class="close" @click="close_pdf">Zamknij <i class="fas fa-times"></i></div>
      </div>
      <div id="adobe-dc-view"></div>
    </div>
    <div class="container">
      <div class="element" @click="globalGoTo('https://www.consilium.europa.eu/prado/pl/search-by-document-country.html', 'link to valid document', 'web')">
        <div class="icon"><i class="fas fa-clipboard-check"></i></div>
        <div class="label">PRADO (autentycznośc dokumentów)</div>
      </div>
      <div v-for="(element, index) in pdf_list" v-bind:key="index">
        <div class="element" @click="gen_pdf(element.path, element.name)">
          <div class="icon"><i :class="[element.icon]"></i></div>
          <div class="label">{{ element.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Validation',
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
      pdf_list: [
        { name: 'Weryfikacja dowodu osobistego', path: 'wer_do.pdf', icon: 'fas fa-fingerprint', short: 'DO' },
        { name: 'Weryfikacja praw jazdy na terenie UE', path: 'KW.pdf', icon: 'fas fa-id-card', short: 'PJ' },
        { name: 'Weryfikacja paszportu', path: 'RWSK.pdf', icon: 'fas fa-passport', short: 'Paszport' }
      ],
      master_path: 'https://tapo24.pl/static/',
      serach_text: ''
    }
  },
  methods: {
    close_pdf () {
      document.getElementById('pdf_container').style.visibility = 'hidden'
      this.$store.state.open_pdf = false
    },
    gen_pdf (path, fileName) {
      if (navigator.onLine) {
        const headers = {
          'Content-Type': 'application/json'
        }
        const data = {
          moduleName: path
        }
        axios
          .post(this.$store.state.path_api + '/module_clicked', data, { headers })
      } else {
        this.$store.commit('ADD_TO_OFFLINE_STACK_MODULE_NAME', path)
      }
      this.adobeDCView = new window.AdobeDC.View({ clientId: this.adobe_key, divId: 'adobe-dc-view' })
      this.adobeDCView.previewFile({
        content: { location: { url: this.master_path + path } },
        metaData: { fileName: fileName }
      }, { embedMode: 'FULL_WINDOW', showLeftHandPanel: true })
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
@import "src/views/grid";
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
