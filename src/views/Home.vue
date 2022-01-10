<template>
  <div class="view">
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="whats_news">O aplikacji</div>
      <p>Aplikacja Tapo24.pl jest aplikacją w fazie produkcji</p>
      <p>Aktualnie posiada moduł taryfikatora, wyszukiwarki kodów pocztowych oraz przepisów </p>
      <p>Docelowo mają być zaimplementowane dodatkowe moduły i pomoce:</p>
      <p>- kody usterek</p>
      <p>- szczegółowe opisy znaków i sygnałów drogowych</p>
      <p>- krótkie opisy podstaw zatrzymania dowodów rejestracyjnych oraz praw jazdy</p>
      <p>- oraz wiele innych pomocy wykorzystywanych w codziennych czynnościach "na drodze"</p>
      <br>
      <p>Aplikacja w fazie beta ewentualne napotkane błędy proszę zgłaszać za pomocą e-mail  jakubdrzmala95@gmail.com</p>
      <p>Aplikacja jest narzędziem wspomagającym nie jest wyznacznikiem aktualnie obowiązujączyhc przepisów w Polsce służy jedynie w celach szkoleniowych i poglądowych</p>
      <div class="version">{{ version }}</div>
    </div>
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-01-09</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Dodanie znaków ostrzegawczych (A)</p>
      <p>- Dodanie znaków nakazu (C)</p>
      <div class="version">{{ version }}</div>
    </div>
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-01-09</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Implementacja sekcji droga (dodanie znaków)</p>
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
  width: 100%;
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
@media only screen and (min-width: 1000px) {
  .home {
    width: 800px;
  }
  .view {
    flex-direction: column;
  }
}
</style>
