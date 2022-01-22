<template>
    <div class="container">
      <div class="header">
        <div class="title">{{ data.name }}</div>
        <div v-if="favorites_array.indexOf(data.name)!=-1">★</div>
      </div>
      <div v-for="(element , index) in data.sub_name" :key="index" class="title"><br>- {{index}}. {{element}}</div>
      <div class="description">{{ data.text }}</div>
      <hr>
      <div class="footer">
        <img v-if="data.path!==null" :src="require(`../assets/${data.path}`)" />
        <div class="tax_container">
          <div>Kwota mandatu: {{ data.tax }} zł</div>
          <div class="test" v-if="data.points!==null && data.code==='Z 01'">Punkty: - </div>
          <div class="test" v-if="data.points===null && data.code!=='Z 01'">Punkty: nie dotyczy</div>
          <div class="test" v-if="data.points!==null && data.code!=='Z 01'">Punkty: {{ data.points }}</div>
          <div class="test" v-if="data.code!=='null'">Kod czynu: {{ data.code }}</div>
          <div class="test" v-if="data.code==='null'">Kod czynu: nie dotyczy</div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'tariffCard.vue',
  computed: {
    ...mapState([
      'favorites_array'
    ])
  },
  props: {
    data: {
      category: null,
      name: null,
      text: null,
      tax: null,
      points: null,
      code: null,
      law: null,
      path: null
    }
  }
}

</script>

<style scoped>
.container {
  background-color: #3d5a80;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  color: #e0fbfc;
  font-family: 'Readex Pro', sans-serif;
}
hr {
  border: 1px solid #EE6C4D;
}
.tax_container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
}
.title {
  font-weight: bold;
  color: #EE6C4D;
}
.footer {
  display: flex;
  justify-content: space-around;
}
img {
  width: 60px;
  height: auto;
}
.description {
  font-size: 12px;
  margin: 5px 10px;
}
.header {
  display: flex;
  justify-content: space-between
}
</style>
