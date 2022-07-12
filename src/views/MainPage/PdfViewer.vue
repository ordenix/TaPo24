<template>
  <div>
    {{$route.params.pdf_name}}
    {{master_path + $route.params.pdf_path}}
    <div id="pdf_container">
      <div class="top_bar">
        <div class="close" @click="close_pdf">Zamknij <i class="fas fa-times"></i></div>
      </div>
      <div id="adobe-dc-view"></div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'PdfViewer',
  data () {
    return {
      adobe_key: '7c43e907d7a144f181e76e77153f738b',
      adobeApiReady: false,
      master_path: 'https://beta.tapo24.pl/static/'
    }
  },
  methods: {
    close_pdf () {
      document.getElementById('pdf_container').style.visibility = 'hidden'
      this.$store.state.open_pdf = false
      this.$router.push({ name: 'Law' })
    },
    gen_pdf () {
      if (navigator.onLine) {
        const headers = {
          'Content-Type': 'application/json'
        }
        const data = {
          moduleName: this.$route.params.pdf_path
        }
        axios
          .post(this.$store.state.path_api + '/module_clicked', data, { headers })
      } else {
        this.$store.commit('ADD_TO_OFFLINE_STACK_MODULE_NAME', this.$route.params.pdf_path)
      }
      this.adobeDCView = new window.AdobeDC.View({ clientId: this.adobe_key, divId: 'adobe-dc-view' })
      this.adobeDCView.previewFile({
        content: { location: { url: this.master_path + this.$route.params.pdf_path } },
        metaData: { fileName: this.$route.params.pdf_name }
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
      this.gen_pdf()
    })
  }
}
</script>

<style scoped lang="scss">
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
