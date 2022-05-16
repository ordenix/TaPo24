<template>
  <div class="master_container">
    <div class="master_title">Kategoria prawa jazdy:</div>
    <div class="less_info">
      <div class="category">
        {{data.category}}
      </div>
      <img v-if="data.path" :src="require(`../assets/${data.path}`)" alt="img"/>
    </div>
    <hr>
    <div class="more" @click="toggle_more_info">
      <div v-if="!show_more">
        <i class="fas fa-chevron-right"></i>Pokaż więcej<i class="fas fa-chevron-left"></i>
      </div>
      <div v-if="show_more">
        <i class="fas fa-chevron-right"></i>Ukryj<i class="fas fa-chevron-left"></i>
      </div>
    </div>
    <div id="more_info" ref="more_info">
      <div class="title" ref="more_info_title">Uprawnia do kierowania:</div>
      <div v-if="show_more_delay">
          <div v-for="(element, index) in data.vehicle_table" :key="index+100">
            <ul><li> {{element.vehicle}}</li></ul>
          </div>
      </div>
      <div class="title" ref="more_info_title2">Wymagania:</div>
      <div v-if="show_more_delay">
        <div v-for="(element, index) in data.requirements" :key="index"><ul><li> {{element.age}}</li></ul></div>
      </div>
      <div v-show="data.remarks">
        <div class="title" ref="more_info_title3">Uwagi:</div>
      <div v-if="show_more_delay">
        <div v-for="(element, index) in data.remarks" :key="index"> <ul><li> {{element.remark}}</li></ul></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'licenceCard',
  data () {
    return {
      show_more: false,
      show_more_delay: false
    }
  },
  props: {
    data: null
  },
  methods: {
    toggle_more_info () {
      this.show_more = !this.show_more
      if (this.show_more) {
        setTimeout(this.toggle_more_info_delay, 10)
        this.$refs.more_info.style.fontSize = '13px'
        this.$refs.more_info.style.padding = '3px 10px'
        this.$refs.more_info_title.style.fontSize = '18px'
        this.$refs.more_info_title.style.padding = '10px'
        this.$refs.more_info_title2.style.fontSize = '18px'
        this.$refs.more_info_title2.style.padding = '10px'
        this.$refs.more_info_title3.style.fontSize = '18px'
        this.$refs.more_info_title3.style.padding = '10px'
      } else {
        setTimeout(this.toggle_more_info_delay, 200)
        this.$refs.more_info.style.fontSize = '0'
        this.$refs.more_info_title.style.fontSize = '0'
        this.$refs.more_info_title.style.padding = '0'
        this.$refs.more_info_title2.style.fontSize = '0'
        this.$refs.more_info_title2.style.padding = '0'
        this.$refs.more_info_title3.style.fontSize = '0'
        this.$refs.more_info_title3.style.padding = '0'
        this.$refs.more_info.style.padding = '0'
      }
    },
    toggle_more_info_delay () {
      this.show_more_delay = !this.show_more_delay
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/views/main_layout";
.master_container {
  transition: 0.5s;
  max-width: 1080px;
  margin: 10px auto !important;
  float: none !important;
  padding: 15px 15px 15px;
}
#more_info {
  transition: 0.5s;
  color: #e0fbfc;
  font-size: 0;
}
.category {
  font-family: $text-family;
  font-weight: bold;
  font-size: 40px;
  color: #e0fbfc;
  float: left;
}
.less_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.more {
  color: #e0fbfc;
  font-family: $text-family;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  float: right;
  margin-bottom: 5px;
}
.title {
  color: #EE6C4D;
  font-weight: bold;
  font-family: $text-family;
  text-align: center;
  padding: 0;
  font-size: 0;
  transition: 0.5s;
}
li {
  padding: 5px 5px;
  list-style-type: square;
}
ul {
  padding-inline-start: 15px;
}
img {
  width: 80px;
  padding: 10px;
}
</style>
