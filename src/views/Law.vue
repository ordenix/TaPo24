<template>
  <div id="main">
    <div v-if="false" class="container">
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
      <div class="element">
        <div class="icon"><i class="fas fa-car"></i></div>
        <div class="label">Prawo o ruchu drogowym</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Law.vue',
  components: {
  },
  data () {
    return {
      array_files: [
        { title: 'Prawo o ruchu drogowym', description: 'Prawo o ruchu drogowym jest', date: '2021-10-10', path: '/static/PRD.pdf' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#main {
  padding: 10px 10px;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}
.element {
  background-color: #EE6C4D;
  height: 100px;
  padding: 3px 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-family: 'Readex Pro', sans-serif;
}
.icon {
  font-size: 30px;
  text-align: center;
}
.label {
  font-size: 15px;
  text-align: center;
}
@media only screen and (min-width: 700px) {
  .container {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
