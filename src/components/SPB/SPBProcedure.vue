<template>
  <div class="small_main_container">
    <div class="master_title">{{title}}</div>
    <hr>
    <div v-for="(element,  index) in spb_data" :key="index">
      <div class="paragraph">{{ element.paragraph }}</div>
      <div class="law">{{ element.law }}
        <div v-if="element.sub_law">
          <div v-for="(sub_element, index) in element.sub_law" :key="index">
            <div class="sub_element">
              {{ sub_element }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPBProcedure',
  props: {
    spb_data: null,
    title: null
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
.small_main_container {
  margin: 10px 10px;
  font-family: $text-family;
  color: $text;
}
.paragraph {
  font-weight: bold;
}
.law {
  padding: 10px;
}
.sub_element {
  padding: 5px 10px;
}
</style>
