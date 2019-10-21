<script>
import NavBar from '../components/NavBar.vue'
import LocationList from '../components/LocationList.vue'
import WeatherDetail from '../components/WeatherDetail.vue'
// @ is an alias to /src
export default {
  components: {
    NavBar,
    LocationList,
    WeatherDetail
  },
   methods: {
    getWeatherData() {
      const url =
        "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" +
        this.$store.state.weatherToken;
      this.axios
        .get(url)
        .then(res => {
          this.$store.commit("weatherDataUpdate", res.data.records.location.map((d,i)=>{
            return {
              ...d,
              siteId:i
            }
            }));
          this.$store.commit('loadingSwich',false);
        })
        .catch(err => {
          alert("取得資料時發生錯誤");
          this.$store.commit('loadingSwich',false);
        });
    }
  },
  created() {
    this.getWeatherData();
  }
}
</script>
<template>
  <div class="weather">
    <nav-bar/>
    <div class="content">
      <location-list/>
      <weather-detail/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.weather{
  width: 100%;
  height: fit-content;
  
}
.content{
  position: relative;
  display: flex;
  margin: 25px;
  justify-content: space-between;
  align-items: flex-start;
}
@media screen and (max-width:930px){
.content{
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
</style>
