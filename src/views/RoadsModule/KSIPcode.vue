<template>
 <div class="main">
   <div v-for="(element, index) in code_array" :key="index">
     <KSIPCodeCard :data="element"/>
   </div>
 </div>
</template>

<script>
import codeKsipData from '@/views/Data/codeKSIP.json'
import KSIPCodeCard from '@/components/KSIPCodeCard'
export default {
  name: 'KSIP_code.vue',
  components: {
    KSIPCodeCard
  },
  data () {
    return {
      code_array: null
    }
  },
  mounted () {
    this.code_array = codeKsipData.code_array
  }
}
</script>

<style scoped>
.main {
  margin: 0 0;
  padding: 5px 0;
}
</style>
