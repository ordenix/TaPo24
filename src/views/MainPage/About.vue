<template>
  <div class="container">
    <div class="title">O APLIKACJI:</div>
    <div class="text">
      TaPo24 jest dedykowaną aplikacją dla kierowców, pracowników MSWiA w Polsce. Aktualnie posiada moduł taryfikatora docelowo mają być zaimplementowane dodatkowe moduły wykorzystywane w codziennych czynnościach "na drodze"
    </div>
    <div class="title">TWÓRCY:</div>
    <div class="authors">Jakub Drzymała front-end developer</div> <div class="contact"> jakubdrzmala95@gmail.com</div>
    <div class="authors">Damian Wieszołek social media,  data management specialist</div> <div class="contact">damianwieszolek@gmail.com</div>
    <div class="authors" @click="goto_web('https://www.instagram.com/jakub.leo/')">Jakub Buława grafika </div> <div class="contact" @click="goto_web('https://www.instagram.com/jakub.leo/')"><i class="fab fa-instagram"></i>Instagram</div>
    <div class="authors">Jakub Sikorski grafika </div> <div class="contact">jakubsikorski04@gmail.com</div>
  </div>
</template>
<script>
export default {
  name: 'About.vue',
  methods: {
    goto (path) {
      this.$router.push({ path: path })
    },
    goto_web (path) {
      window.open(path)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/views/main_layout";
.title {
  margin: 10px;
  color: #EE6C4D;
  font-family: $text-family;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.text {
  color: #e0fbfc;
  font-family: $text-family;
  font-size: 15px;
}
.title i {
  margin: 10px;
}
.container {
  background-color: #3d5a80;
  padding: 8px;
  border-radius: 8px;
  margin: 10px;
  margin-top: 80px;
}
.authors {
  color: #e0fbfc;
  font-family: $text-family;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
.contact {
  color: #e0fbfc;
  font-family: $text-family;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
