<template>
  <div>
    <div id="main">
      <div v-if="$route.params.status==='home'" class="container">
        <div class="element" @click="globalGoTo('/UTO/he/', null)">
          <div class="icon"></div>
          <div class="label">Hulajnoga elektryczna</div>
        </div>
        <div class="element" @click="globalGoTo('/UTO/uto/', null)">
          <div class="icon"></div>
          <div class="label">Urządzenie transportu osobistego</div>
        </div>
        <div class="element" @click="globalGoTo('/UTO/uwr/', null)">
          <div class="icon"></div>
          <div class="label">Urządzenie wspomagające ruch</div>
        </div>
      </div>
    </div>
    <div v-if="$route.params.status==='he'">
      <uto-component :uto_data="uto.uto_array[0]"></uto-component>
    </div>
    <div v-if="$route.params.status==='uto'">
      <uto-component :uto_data="uto.uto_array[1]"></uto-component>
    </div>
    <div v-if="$route.params.status==='uwr'">
      <uto-component :uto_data="uto.uto_array[2]"></uto-component>
    </div>
  </div>
</template>

<script>
import uto from '@/views/Data/UTO.json'
import utoComponent from '@/components/utoComponent'
export default {
  name: 'UTO',
  components: {
    utoComponent
  },
  data () {
    return {
      uto: uto
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";

</style>
