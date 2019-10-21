<script>
import IntervalContent from "./IntervalContent.vue";
export default {
  components: {
    IntervalContent
  },
  data() {
    return {
      datalist: []
    };
  },
  computed: {
    location() {  //獲取城市名稱
      if (this.$store.state.isLoading) {
        return
      }else{
        const name = this.$store.state.weatherData.find(
          res => res.siteId === this.$store.state.currentLocationId
        );
        return name.locationName;
        }
    },
    dataList() { //獲取城市各時段資料
      if (this.$store.state.isLoading) {
        return;
      } else {
        const eleList = ["MinT", "MaxT", "PoP", "CI", "Wx"]; //需獲取元素名稱列表
        const Id = this.$store.state.currentLocationId;
        const locationData = this.$store.state.weatherData.find(res => {
          return res.siteId === Id;
        });
        let list = [];
        for (let i = 0; i < 3; i++) {
          let obj = {
            sTime: locationData.weatherElement[0].time[i].startTime.slice(
              5,
              16
            ),
            eTime: locationData.weatherElement[0].time[i].endTime.slice(5, 16)
          };
          eleList.forEach(data => {
            obj[data] = this.itemDataFilter(
              data,
              locationData.weatherElement,
              i
            );
          });
          list.push(obj);
        }
        return list;
      }
    }
  },
  methods: {
    itemDataFilter(name = "", data = [], time = 0) {
      const obj = data.find(res => {
        return res.elementName === name;
      });
      const eleValue = obj.time[time].parameter.parameterName;
      return eleValue;
    },
  },
  mounted() {
  }
};
</script>
<template>
  <div class="detail-content">
    <h1>{{location}}</h1>
    <transition name="down" appear>
      <div class="weather-list-container">
        <interval-content
          v-for="(item,index) in dataList"
          :key="index"
          :startTime="item.sTime"
          :endTime="item.eTime"
          :pop="item.PoP"
          :wx="item.Wx"
          :ci="item.CI"
          :maxT="item.MaxT"
          :minT="item.MinT"
        />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.detail-content {
  display: flex;
  flex-direction: column;
  margin: 0;
  h1 {
    font-size: 45px;
    margin: 0 0 15px 10px;
    width: 100%;
    border-bottom: 2px solid $navyblue;
    color: $navyblue;
  }
}
.weather-list-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 630px;
}
@media screen and (max-width: 1200px) {
  .weather-list-container {
    max-width: 315px;
  }
}
</style>