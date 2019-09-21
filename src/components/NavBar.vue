<script>
export default {};
</script>
<template>
  <div class="nav-bar">
    <div class="title">
      <font-awesome-icon icon="sun" class="icon" />
      <h2>天氣預報</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
//@import "D:\\網頁\\VueWeatherAQI\\src/css/variables.scss";

.nav-bar {
  background-color: $white;
  padding: 10px 20px;
  height: 60px;
  *{
    color:$navyblue;
  }
}
.title {
  display: flex;
  align-items: center;
  .icon {
    font-size: 40px;
    margin-right: 10px;
    animation: circle 5s linear infinite;
  }
}
@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>