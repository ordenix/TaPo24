<template>
  <div class="view">
    <div class="master_container">
      <div class="master_title">Instalacja na urządzeniach iOS <i class="fab fa-apple"></i></div>
      <div class="sub_title">
        Wymagania:
      </div>
      <div class="description">
        Aktualna wersja przeglądarki Safari <i class="fab fa-safari"></i>
      </div>
      <div class="sub_title">
        Instalacja:
      </div>
      <div class="description2">
        <div>1. W przeglądarce otwórz stronę tapo24.pl i kliknij ikonę udostępniana</div>
        <img :src="require(`../assets/install_iOS/step1.jpeg`)" alt="Sign"/>
      </div>
      <div class="description2">
        <div>2. Wybieramy opcję dodaj do ekranu początkowego</div>
        <img :src="require(`../assets/install_iOS/step2.jpeg`)" alt="Sign"/>
      </div>
      <div class="description2">
        <div>3. Zatwierdź klikając dodaj</div>
        <img :src="require(`../assets/install_iOS/step3.jpeg`)" alt="Sign"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'instal_iOS'
}
</script>

<style scoped lang="scss">
@import "main_layout";
.view {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub_title {
  text-align: center;
  margin-top: 10px;
  color: #98C1D9;
  font-weight: bold;
  font-family: 'Readex Pro', sans-serif;
}
.description {
  font-family: 'Readex Pro', sans-serif;
  color: #98C1D9;
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
}
.description2 {
  font-family: 'Readex Pro', sans-serif;
  color: #98C1D9;
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
}
img {
  width: 100px;
}
</style>
