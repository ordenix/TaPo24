<template>
  <div class="main">
    <div class="small_main_container">
      <div class="master_title">Notatnik</div>
      <div class="box">
        <input type="number" placeholder="Przebieg/liczby" v-model="numbers" @change="save_number">
        <div class="orange_button" @click="clear('number')">Wyczyść</div>
        <textarea placeholder="Wpisz szybką notatkę (text)" v-model="text" @change="save_text"></textarea>
        <div class="orange_button" @click="clear">Wyczyść</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      numbers: null,
      text: null
    }
  },
  methods: {
    clear (type) {
      if (type === 'number') {
        this.numbers = null
        localStorage.removeItem('note_number')
      } else {
        this.text = null
        localStorage.removeItem('note_text')
      }
    },
    save_number () {
      localStorage.setItem('note_number', this.numbers)
    },
    save_text () {
      localStorage.setItem('note_text', this.text)
    }
  },
  beforeDestroy () {
    if (this.text != null) {
      this.save_text()
    }
    if (this.numbers != null) {
      this.save_number()
    }
  },
  beforeMount () {
    if (localStorage.getItem('note_number')) {
      this.numbers = localStorage.getItem('note_number')
    }
    if (localStorage.getItem('note_text')) {
      this.text = localStorage.getItem('note_text')
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/main_layout";
@import "src/views/others";
textarea {
  resize: none;
  width: 100%;
  font-family: 'Readex Pro', sans-serif;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 18px;
  height: 40vh;
}
input {
  font-family: 'Readex Pro', sans-serif;
  border-radius: 8px;
  border: 1px solid transparent;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.orange_button {
  margin: 5px 0px 5px 0px;
}
</style>
