<template>
  <div>
    <div @click="genpdf">TEN MODUŁ AKTUALNIE JEST NIEDOSTĘPNY</div>
    <div @click="genpdf2">TEN MODUŁ AKTUALNIE JEST NIEDOSTĘPNY</div>
    <div id="adobe-dc-view"></div>
  </div>
</template>

<script>
export default {
  name: 'Road.vue',
  data () {
    return {
      adobe_key: '2023be3e7c604da78217a23dda3c8229',
      adobeApiReady: false,
      adobeDCView: null
    }
  },
  mounted () {
    const AdobeDC = document.createElement('script')
    AdobeDC.setAttribute('src', 'https://documentcloud.adobe.com/view-sdk/main.js')
    document.head.appendChild(AdobeDC)
    document.addEventListener('adobe_dc_view_sdk.ready', () => {
      this.adobeApiReady = true
    })
  },
  methods: {
    genpdf () {
      console.log('ttt')
      this.adobeDCView = new window.AdobeDC.View({ clientId: this.adobe_key, divId: 'adobe-dc-view' })
      console.log('ttt')
      const reader = new FileReader()
      reader.onloadend = function (e) {
        const filePromise = Promise.resolve(e.target.result)
        this.adobeDCView.previewFile({
          content: { promise: filePromise },
          metaData: { fileName: 'files[0].name' }
        })
      }
      this.adobeDCView.previewFile({
        content: { promise: 'file:/static/PRD.pdf' },
        metaData: { fileName: 'Bodea Brochure.pdf' }
      }, {})
    },
    genpdf2 () {
      this.adobeDCView = new window.AdobeDC.View({ clientId: this.adobe_key, divId: 'adobe-dc-view' })
      this.adobeDCView.previewFile({
        content: { location: { url: 'https://tapo24.pl/static/PRD.pdf' } },
        metaData: { fileName: 'PRD.pdf' }
      })
    }
  }
}
</script>

<style scoped>

</style>
