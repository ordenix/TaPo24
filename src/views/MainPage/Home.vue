<template>
  <div class="view2">
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="whats_news">Instalacja</div>
      <p>Aplikacja umożliwia zainstalowanie jej na urządzeniach mobilnych oraz oferuje pełną funkcjonalność działania jako strona internetowa.</p>
      <div class="install_container">
        <div class="install_sub_container" @click="go_to_play">
          <div class="icon"><i class="fab fa-android"></i></div>
          <div class="install_title">Android</div>
          <div class="link">Sklep Play</div>
        </div>
        <div class="install_sub_container" @click="go_to_ios">
          <div class="icon"><i class="fab fa-apple"></i></div>
          <div class="install_title">iOS</div>
          <div class="link">Instrukcja</div>
        </div>
      </div>
      <div class="whats_news">O aplikacji</div>
      <p>Aplikacja Tapo24.pl jest aplikacją w fazie produkcji</p>
      <p>Aktualnie aplikacja posiada moduł taryfikatora, wyszukiwarki kodów pocztowych oraz przepisów </p>
      <p>Docelowo mają być zaimplementowane dodatkowe moduły i pomoce:</p>
      <p>- szczegółowe opisy znaków i sygnałów drogowych</p>
      <p>- kalkulator trzeźwości</p>
      <p>- oraz wiele innych pomocy wykorzystywanych w codziennych czynnościach "na drodze"</p>
      <br>
      <p>Aplikacja w fazie beta, ewentualne napotkane błędy proszę zgłaszać za pomocą e-mail  jakubdrzmala95@gmail.com</p>
      <p>Aplikacja jest narzędziem wspomagającym nie jest wyznacznikiem aktualnie obowiązujących przepisów w Polsce służy jedynie w celach szkoleniowych i poglądowych</p>
      <div class="version">{{ version }}</div>
    </div>
    <div class="home">
      <div class="title"> TAryfikator POlicyjny24 </div>
      <div class="date">2022-07-19</div>
      <div class="whats_news">Co nowego?</div>
      <p>- Dodanie modułu szybkiego notatnika</p>
      <p>- Poprawki w wyświetlaniu plików pdf</p>
      <p>- Dodanie nowych ustaw i rozporządzeń</p>
      <p>- Dodanie nowych wykroczeń porządkowych</p>
      <p>- Bieżące poprawki</p>
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
      version: this.$store.state.version + '[BETA]'
    }
  },
  mounted () {
    this.version = this.$store.state.version + '[BETA]'
  },
  methods: {
    clearCookie () {
      console.log('delete')
      caches.keys().then(function (names) {
        for (const name of names) {
          caches.delete(name)
        }
      })
    },
    go_to_play () {
      window.open('https://play.google.com/store/apps/details?id=pl.tapo24.twa')
    },
    go_to_ios () {
      this.$router.push({ path: '/Install_iOS/' })
    }
  }
}
</script>

<style scoped lang="scss">
.view2 {
  padding: 8px 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 10px auto;
  align-content: center;
  justify-content: space-around;
}
.home {
  background-color: #3d5a80;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  font-family: 'Readex Pro', sans-serif, 'FontAwesome';
  color: #fffafa;
  margin: 10px 10px;
  font-size: 13px;
}
.version {
  float: right;
  font-weight: lighter;
  font-size: 10px;
  color: black;
}
.date {
  font-size: 10px;
  color: #fffafa;
}
.title {
  font-weight: bold;
  font-size: 20px;
  color: #EE6C4D;
  text-align: center;
}
.whats_news {
  text-align: center;
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
.install_sub_container {
  background-color: #293241;
  border-radius: 8px;
  padding: 10px 40px;
  text-align: center;
  margin-bottom: 10px;
  width: 110px;
}
.install_sub_container:hover {
  background-color: #98C1D9;
}
.install_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #EE6C4D;
  font-weight: bold;
}
.install_title {
  font-size: 18px;
}
.link {
  font-size: 10px;
}
.icon {
  font-size: 22px;
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
