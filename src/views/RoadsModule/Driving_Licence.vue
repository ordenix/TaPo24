<template>
  <div class="main">
    <div v-for="(element, index) in licence_list" :key="index">
      <LicenceCard :data="element" />
    </div>
  </div>
</template>

<script>
import LicenceData from '@/views/Data/driving_licence.json'
import LicenceCard from '@/components/licenceCard'
export default {
  name: 'Driving_Licence.vue',
  components: { LicenceCard },
  data () {
    return {
      licence_list: null
    }
  },
  mounted () {
    this.licence_list = LicenceData.category_array
  }
}
</script>

<style scoped lang="scss">
.main {
  margin: 0 0;
  padding: 5px 0;
}
</style>
