<template>
  <transition name="fade2" appear>
    <div class="mobile" :class="{'list-active':screenWidth}">
      <ul class="location-list">
        <location-item
          v-for="item in locationListData"
          :key="item.location"
          :locationName="item.location"
          :maxT="item.maxT"
          :minT="item.minT"
        />
      </ul>
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
    locationListData() {
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
          maxT: maxT
        };
      });

      return list;
    },
    screenWidth() {
      const w = document.documentElement.clientWidth;
      if (w < 600 || this.mobileSw) {
        return this.mobileSw;
      } else {
        return true;
      }
    }
  },
  methods: {
    listBtn() {
      this.mobileSw = !this.mobileSw;
    }
  }
};
</script>

<style lang="scss" scoped>
.location-list {
  position: relative;
  border-radius: 8px;
  background-color: $babyblue;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 820px;
}
.mobile {
  position: relative;
}
.mobile-btn {
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
  .location-list {
    max-width: 560px;
  }
}
@media screen and (max-width: 600px) {
  .location-list {
    max-width: 300px;
    justify-content: stretch;
    position: relative;
    height: 80vh;
    overflow: auto;
    top: 0px;
    left: 0;
  }
  
  .mobile {
    position: absolute;
    top: -26px;
    left: -28px;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 50;
  }
  .mobile-btn{
    display: block;
  }
  .list-active {
    transform: translateX(0%);
  }
}
</style>