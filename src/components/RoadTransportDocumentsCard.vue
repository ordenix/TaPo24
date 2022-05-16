<template>
  <div class="small_main_container2">
    <div class="master_title">{{title}}</div>
    <div  ref="more_info" v-if="show_more">
    <div v-for="(element, index) in data" :key="index" class="container">
      <div class="title" v-if="element.title_document" >{{element.title_document}}</div>
      <div class="title" v-if="element.title_p" >{{element.title_p}}</div>
      <div class="title" v-if="element.title_ue" >{{element.title_ue}}</div>
      <div class="title" v-if="element.title_others" >{{element.title_others}}</div>
      <div>{{element.document}}</div>
      <div>{{element.poland}}</div>
      <div>{{element.ue}}</div>
      <div>{{element.others}}</div>
    </div>
  </div>
    <div class="more" @click="toggle_more_info">
      <div v-if="!show_more">
        <i class="fas fa-chevron-right"></i>Pokaż więcej<i class="fas fa-chevron-left"></i>
      </div>
      <div v-if="show_more">
        <i class="fas fa-chevron-right"></i>Ukryj<i class="fas fa-chevron-left"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadTransportDocumentsCard',
  props: {
    data: null,
    title: null
  },
  data () {
    return {
      show_more: false
    }
  },
  methods: {
    toggle_more_info () {
      this.show_more = !this.show_more
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";

.small_main_container2 { /* like points calc postal code etc */
  margin: 10px;
  background-color: #3D5A80;
  border-radius: 8px;
  padding: 20px 10px;
  height: min-content;
  transition: height 5s;
  -webkit-transition: height 5s ease;
}
.container {
  transition: 0.5s;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
  color: #e0fbfc;
  font-family: $text-family;
  font-size: 10px;
  border-bottom: 2px solid #EE6C4D;
  padding: 10px;
}
.title{
  color: #EE6C4D;
  font-weight: bold;
}
.more {
  color: #e0fbfc;
  font-family: $text-family;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-top: 10px;
}
@media only screen and (min-width: 700px) {
  .container {
    font-size: unset;
  }
}
</style>
