<template>
  <div>
    <div id="footer" v-if="!state.menu" @click="back"><i class="fas fa-arrow-left"></i> Powrót</div>
    <div id="main">
      <div class="menu" v-if="state.menu">
        <div class="container">
          <div class="element" @click="onClick('code')">
            <div class="icon"><i class="fas fa-globe-europe"></i></div>
            <div class="label">Kody Homologacji</div>
          </div>
          <div class="element" @click="onClick('front')">
            <div class="icon"><i class="fas fa-car"></i></div>
            <div class="label">Reflektory</div>
          </div>
          <div class="element" @click="onClick('other')">
            <div class="icon"><i class="far fa-lightbulb"></i></div>
            <div class="label">Pozostałe światła</div>
          </div>
        </div>
      </div>
      <div class="cont" v-if="state.homologation_country">
        <div>
          <div v-for="(element, index) in dataCode" :key="index" class="code_container">
            <div class="code_element">
              <div class="symbol">
                {{element.symbol}}
              </div>
              <div class="country">
                {{element.issue_country}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont" v-if="state.front_lights">
        <div>
          <div v-for="(element, index) in dataFrontLights" :key="index" class="code_container">
            <div class="elements">
              <div class="code_element">
                <div class="symbol2">
                  {{element.sign}}
                </div>
                <div class="type">
                  {{element.type}}
                </div>
              </div>
              <div class="remarks" v-if="element.remarks">
                Uwaga: {{element.remarks}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont" v-if="state.other_lights">
        <div>
          <div v-for="(element, index) in dataOtherLights" :key="index" class="code_container">
            <div class="elements">
              <div class="code_element">
                <div class="symbol2">
                  {{element.sign}}
                </div>
                <div class="type">
                  {{element.type}}
                </div>
              </div>
              <div class="remarks" v-if="element.remarks">
                Uwaga: {{element.remarks}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LightsData from '@/views/Data/lights.json'
export default {
  name: 'Lights.vue',
  data () {
    return {
      dataCode: [],
      dataFrontLights: [],
      dataOtherLights: [],
      state: {
        menu: true,
        homologation_country: false,
        front_lights: false,
        other_lights: false
      }
    }
  },
  mounted () {
    this.dataCode = LightsData.approval
    this.dataFrontLights = LightsData.light_front
    this.dataOtherLights = LightsData.light_others
  },
  methods: {
    back () {
      this.state.menu = true
      this.state.homologation_country = false
      this.state.front_lights = false
      this.state.other_lights = false
    },
    onClick (module) {
      if (module === 'code') {
        this.state.menu = false
        this.state.homologation_country = true
        this.state.front_lights = false
        this.state.other_lights = false
      }
      if (module === 'front') {
        this.state.menu = false
        this.state.homologation_country = false
        this.state.front_lights = true
        this.state.other_lights = false
      }
      if (module === 'other') {
        this.state.menu = false
        this.state.homologation_country = false
        this.state.front_lights = false
        this.state.other_lights = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../grid";
@import "../main_layout";
.cont {
  background-color: #3D5A80;
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 25px;
}
.code_element {
  display: flex;
  font-family: $text-family;
  align-items: center;
  color: $text;
}
.elements {
  padding: 5px 0;
  border-bottom: 2px solid #EE6C4D;
}
.remarks{
  padding-top: 5px;
  font-family: $text-family;
  align-items: center;
  color: $text;
}
.symbol {
  font-size: 30px;
  font-weight: bold;
  width: 65px;
}
.symbol2 {
  font-size: 25px;
  font-weight: bold;
  width: 125px;
}
.type {
  font-size: 18px;
  width: min-content;
}
.country {
  font-size: 20px;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #fff;
  margin-bottom: 15px;
  z-index: 10;;
  font-family: $text-family;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
  padding-right: 15px;
  box-sizing: border-box;
}
</style>
