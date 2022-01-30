<template>
  <div class="master_container">
    <div class="master_title">
      Status: {{data.id}}
    </div>
    <div class="less_info">
      {{data.status}}
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
      Opis statusu: {{data.state_description}}
      <div v-if="data.remarks" class="remarks">
        <br>
        Wskazania: {{data.remarks}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KSIPCodeCard.vue',
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
      } else {
        setTimeout(this.toggle_more_info_delay, 200)
        this.$refs.more_info.style.fontSize = '0'
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
  width: unset;
  transition: 0.5s;
  margin: 15px 10px;
}
.less_info {
  font-family: $text-family;
  color: $text;
  font-weight: bold;
  padding: 10px;
  text-align: center;
}
.more {
  color: #e0fbfc;
  font-family: $text-family;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
}
#more_info {
  transition: 0.5s;
  color: #e0fbfc;
  font-size: 0;
}
.remarks {
  color: #EE6C4D;
}
</style>
