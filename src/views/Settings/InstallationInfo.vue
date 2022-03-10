<template>
  <div class="small_main_container">
    <div>Aktualna wersja klienta: {{ $store.state.version }}</div>
    <div>Wersja na serwerze: {{version}}</div>
    <div>UID: {{ $store.state.UID }}</div>
    <div
      @click="get_update()"
      class="orange_button"
      v-if="version !== 'brak połączenia z siecią' && version !== $store.state.version">
      AKTUALIZUJ
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Installation_Info',
  data () {
    return {
      version: 'brak połączenia z siecią'
    }
  },
  mounted () {
    this.get_version_info()
  },
  methods: {
    get_update () {
      window.location.reload(true)
    },
    get_version_info () {
      if (navigator.onLine) {
        const headers = {
          'Content-Type': 'application/json'
        }
        axios
          .get(this.$store.state.path_api + '/installation/get_last_versions', { headers })
          .then(response => {
            this.version = response.data.version_number
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
@import "src/views/others";
.small_main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e0fbfc;
}
.orange_button {
  color: black;
}
</style>
