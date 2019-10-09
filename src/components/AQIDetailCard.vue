<template>
  <div class="card-container">
    <div class="card">
      <h1>{{AQIObj.County}} </h1>
      <h2>{{AQIObj.SiteName}}</h2>
      <button class="close-btn" @click="$emit('close',false)"><font-awesome-icon icon="times"/></button>
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
  },
  methods:{

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
.close-btn{
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff4b4b;
  border: none;
  color:$white;
  right: 15px;
  top: 15px;
  font-size: 20px;
}
.close-btn:hover{
  transform: scale(1.1);
}
.card {
  position: relative;
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
@media screen and(max-width:1000px){
  .card-container{
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.4);
    width: 100vw;
    height: calc(100vh + 20px);
    top: 0;
    left: 0;
  }
  .close-btn{
    display: block;
  }
  .card{
    position: relative;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);

  }
}
@media screen and(max-width:400px){
  .card{
    zoom: 0.8;
  }
}
</style>