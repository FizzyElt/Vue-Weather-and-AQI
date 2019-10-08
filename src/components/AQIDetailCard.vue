<template>
  <div class="card-container">
    <div class="card">
      <h1>{{AQIObj.County}}</h1>
      <h2>{{AQIObj.SiteName}}</h2>
      <ul>
        <li>
          <div class="value-name">
            <h2>AQI</h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj.AQI}}</h2>
          </div>
        </li>
        <li>
          <div class="value-name">
            <h2>臭氧</h2>
            <h2>
              O
              <sub>3</sub>
            </h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['O3']}}</h2>
            <h3>ppb</h3>
          </div>
        </li>

        <li>
          <div class="value-name">
            <h2>細懸浮微粒</h2>
            <h2>
              PM
              <sub>2.5</sub>
            </h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['PM2.5']}}</h2>
            <h3>
              ug/m
              <sup>3</sup>
            </h3>
          </div>
        </li>
        <li>
          <div class="value-name">
            <h2>懸浮微粒</h2>
            <h2>
              PM
              <sub>10</sub>
            </h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['PM10']}}</h2>
            <h3>
              ug/m
              <sup>3</sup>
            </h3>
          </div>
        </li>
        <li>
          <div class="value-name">
            <h2>一氧化碳</h2>
            <h2>CO</h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['CO']}}</h2>
            <h3>ppm</h3>
          </div>
        </li>
        <li>
          <div class="value-name">
            <h2>二氧化硫</h2>
            <h2>
              SO
              <sub>2</sub>
            </h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['SO2']}}</h2>
            <h3>ppb</h3>
          </div>
        </li>
        <li>
          <div class="value-name">
            <h2>二氧化氮</h2>
            <h2>
              NO
              <sub>2</sub>
            </h2>
          </div>
          <div class="value-box">
            <h2>{{AQIObj['NO2']}}</h2>
            <h3>ppb</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    AQIObj: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 21px;
}
h3 {
  font-size: 15px;
}
.card-container {
  display: block;
}
.card {
  max-width: 380px;
  border-radius: 8px;
  padding: 10px;
  color: $babyblue;
  background-color: $navyblue;
  h1 {
    border-bottom: 2px solid $babyblue;
  }
  >h2{
      font-size: 25px;
  }
}
.value-name {
  display: flex;
  align-items: center;
  margin-right: 50px;
  h2:first-child {
    margin-right: 8px;
  }
}
.value-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  h2 {
    margin-right: 10px;
  }
}
ul {
  margin-top: 15px;
  li {
      padding: 3px 8px;
      border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  li + li {
    margin-top: 15px;
  }
  li:hover{
      background-color: #ffb13b;
      color: $navyblue;
  }
}
</style>