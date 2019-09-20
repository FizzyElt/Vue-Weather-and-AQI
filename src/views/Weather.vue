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
  display: flex;
  margin: 25px;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
