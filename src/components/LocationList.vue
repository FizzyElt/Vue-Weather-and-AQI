<template>
  <transition name="fade2" appear>
    <div class="mobile" :class="{'list-active':screenWidth}">
      <div class="container">
      <ul class="location-list">
        <location-item
          v-for="item in locationListData"
          :key="item.location"
          :locationName="item.location"
          :maxT="item.maxT"
          :minT="item.minT"
          :siteId="item.siteId"
          v-on:close="listBtn"
        />
      </ul>
      </div>
      <button class="mobile-btn" @click="listBtn()">
        <font-awesome-icon :icon="['fas',mobileSw?'chevron-left':'chevron-right']"/>
      </button>
    </div>
  </transition>
</template>

<script>
import LocationItem from "./LocationItem.vue";
export default {
  components: {
    LocationItem
  },
  data() {
    return {
      mobileSw: false
    };
  },
  computed: {
    locationListData() {  //獲取城市列表資料
      const list = this.$store.state.weatherData.map(data => {
        const minT = data.weatherElement.find(t => {
          return t.elementName === "MinT";
        }).time[0].parameter.parameterName;
        const maxT = data.weatherElement.find(t => {
          return t.elementName === "MaxT";
        }).time[0].parameter.parameterName;
        return {
          location: data.locationName,
          minT: minT,
          maxT: maxT,
          siteId:data.siteId
        };
      });

      return list;
    },
    screenWidth() { //手機畫面判斷
      const w = document.documentElement.clientWidth;
      if (w < 600 || this.mobileSw) {
        return this.mobileSw;
      } else {
        return true;
      }
    }
  },
  methods: {
    listBtn() { //手機板收合按鈕
      this.mobileSw = !this.mobileSw;
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
  padding: 20px;
  background-color: $babyblue;
  border-radius: 8px;
  max-width: 820px;
}
.location-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.mobile {
  position: relative;
}
.mobile-btn {  //手機版才出現
  display: none;
  position: absolute;
  width: 40px;
  height: 60px;
  border-radius: 0px 8px 8px 0px;
  border: none;
  font-size: 25px;
  background-color: $babyblue;
  right: -39px;
  top: 6px;
  z-index: 999;
}

@media screen and (max-width: 1500px) {
  .container {
    max-width: 560px;
  }
}
@media screen and (max-width: 600px) {
  .container{
  background-color: $babyblue;
  border-radius: 8px;
  height: 80vh;
  overflow: auto;
  padding: 10px;
}
  .location-list {
    max-width: 260px;
    justify-content: stretch;
    position: relative;
    top: 0px;
    left: 0;
    padding: 0;
    overflow: hidden;
  }
  .mobile {
    position: absolute;
    top: -26px;
    left: -28px;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 50;
    height: 80vh;
  }
  .mobile-btn{
    display: block;
  }
  .list-active {
    transform: translateX(0%);
  }
}
</style>