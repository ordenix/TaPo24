<template>
  <div>
    <div id="main">
      <div v-if="$route.params.status==='home'" class="container">
        <div class="element" @click="globalGoTo('/SPB/spb_list/', null)">
          <div class="icon"><i class="fa-regular fa-hand-point-up"></i></div>
          <div class="label">Przypadki użycia ŚPB</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/gun_list_used/', null)">
          <div class="icon"><i class="fa-solid fa-gun"></i><i class="fa-solid fa-shield"></i></div>
          <div class="label">Przypadki użycia broni palnej</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/gun_list/', null)">
          <div class="icon"><i class="fa-solid fa-gun"></i></div>
          <div class="label">Przypadki wykorzystania broni palnej</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/help/', null)">
          <div class="icon"><i class="fa-solid fa-briefcase-medical"></i></div>
          <div class="label">Pomoc po użyciu</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/help_gun/', null)">
          <div class="icon"><i class="fa-solid fa-gun"></i><i class="fa-solid fa-briefcase-medical"></i></div>
          <div class="label">Pomoc po użyciu broni palnej</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/use/', null)">
          <div class="icon"><i class="fa-solid fa-briefcase"></i></div>
          <div class="label">Skutkowe użycie - uprawniony</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/supervisor/', null)">
          <div class="icon"><i class="fa-solid fa-business-time"></i></div>
          <div class="label">Skutkowe użycie - przełożony</div>
        </div>
        <div class="element" @click="globalGoTo('/SPB/before/', null)">
          <div class="icon"><i class="fa-solid fa-list-check"></i></div>
          <div class="label">Procedura przed użyciem</div>
        </div>
      </div>
      <div v-if="$route.params.status==='spb_list'">
        <div class="container2">
          <div v-for="(element, index) in spb_data" :key="index" class="element2" @click="onSpbClicked(element)">
            <div class="icon"></div>
            <div class="label" v-if="!element.name_short">{{element.name}}</div>
            <div class="label" v-if="element.name_short">{{element.name_short}}</div>
          </div>
        </div>
      </div>
      <div v-if="$route.params.status==='show_spb'">
        <SPBComponent :spbData="spb_special_data"></SPBComponent>
      </div>
      <div v-if="$route.params.status==='gun_list_used'">
        <SPBWeaponUsed/>
      </div>
      <div v-if="$route.params.status==='gun_list'">
        <SPBWeapon/>
      </div>
      <div v-if="$route.params.status==='help'">
        <SPBProcedure
          title="Pomoc po użyciu ŚPB"
          :spb_data = spb.help
        />
      </div>
      <div v-if="$route.params.status==='help_gun'">
        <SPBProcedure
          title="Pomoc po użyciu ŚPB"
          :spb_data = spb.help_gun
        />
      </div>
      <div v-if="$route.params.status==='use'">
        <SPBProcedure
          title="Skutkowe użycie - uprawniony"
          :spb_data = spb.use
        />
      </div>
      <div v-if="$route.params.status==='supervisor'">
        <SPBProcedure
          title="Skutkowe użycie - przełożony"
          :spb_data = spb.supervisor
        />
      </div>
      <div v-if="$route.params.status==='before'">
        <SPBProcedure
          title="Procedura przed użyciem broni palnej"
          :spb_data = spb.before_gun
        />
      </div>
    </div>
  </div>
</template>

<script>
import spb from '@/views/Data/SPB.json'
import SPBComponent from '@/components/SPB/SPBComponent'
import SPBWeaponUsed from '@/components/SPB/SPBWeaponUsed'
import SPBWeapon from '@/components/SPB/SPBWeapon'
import SPBProcedure from '@/components/SPB/SPBProcedure'
export default {
  name: 'SPB',
  components: {
    SPBProcedure,
    SPBComponent,
    SPBWeaponUsed,
    SPBWeapon
  },
  data () {
    return {
      spb_data: spb.spb_array,
      spb_special_data: null,
      spb: spb
    }
  },
  methods: {
    onSpbClicked (data) {
      // set selected spb condition to spb component and render it
      this.spb_special_data = data
      this.globalGoTo('/SPB/show_spb/', null)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/views/grid";
.element2 {
  background-color: #EE6C4D;
  min-height: 150px;
  padding: 3px 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-family: 'Readex Pro', sans-serif;
}
.container2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: 6px;
}

@media only screen and (min-width: 700px) {
  .container2 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
