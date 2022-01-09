<template>
  <div class="view">
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-01-09</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Implementacja sekcji droga</p>
      <p>- Dodanie znaków zakazu (B)</p>
      <div class="version">{{ version }}</div>
    </div>
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-01-07</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Implementacja sekcji przepisy</p>
      <p>- Dodanie wyszukiwarki kodów pocztowych (tylko on-line)</p>
      <p>- Możliwość wyszukiwania kodów w formacie XX-XXX lub XXXXX (41-100 41100)</p>
      <div class="version">{{ version }}</div>
    </div>
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-01-02</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Wydanie 1 wersji aplikacji</p>
      <p>- Zaimplementowano moduł taryfikatora</p>
      <div class="version">{{ version }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      version: '1.2 [BETA]'
    }
  },
  methods: {
    clearCookie () {
      console.log('delete')
      caches.keys().then(function (names) {
        for (const name of names) {
          caches.delete(name)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.view {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
}
.home {
  background-color: #3d5a80;
  width: max-content;
  padding: 8px;
  border-radius: 8px;
  font-family: 'Readex Pro', sans-serif;
  color: #98C1D9;
  margin: 10px 10px;
}
.version {
  float: right;
  font-weight: lighter;
  font-size: 10px;
  color: black;
}
.date {
  font-size: 15px;
  color: black;
}
.title {
  font-weight: bold;
  font-size: 20px;
  color: #EE6C4D;
}
.whats_news {
  margin-top: 10px;
  font-weight: bold;
}

.whats_news ~ p {
  margin-left: 10px;
}
.button {
  background-color: #42b983;
  padding: 10px 10px;
}
</style>
