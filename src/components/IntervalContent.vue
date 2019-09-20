<template>
  <div class="content">
      <p class="time">{{startTime}}~{{endTime}}</p>
      <h2 class="tem">溫度：{{minT}}⁰C~{{maxT}}⁰C</h2>
      <h3 class="ci">體感：{{ci}}</h3>
      <h3 class="wx">天氣狀況：{{wx}}</h3>
      <h2 class="pop">降雨機率：{{pop}}%</h2>
  </div>
</template>
<script>
export default {
  props: {
    startTime:{
      type:String,
      default:''
    },
    endTime:{
      type:String,
      default:''
    },
    maxT: {
      type: String,
      default: "20"
    },
    minT: {
      type: String,
      default: "25"
    },
    pop: {   //降雨機率
      type: String,
      default: '60'
    },
    wx: {   //天氣狀況
      type: String,
      default: "cxvcx"
    },
    ci: {   //體感
      type: String,
      default: "ddfsfds"
    }
  }
};
</script>
<style lang="scss" scoped>
.content{
  max-width: 300px;
  padding:0 15px 10px 15px;
  border-radius: 10px;
  background-color: $babyblue;
  margin:10px 5px 10px 5px;
  overflow: hidden;
  >*:not(.time){
    transition: 0.2s;
    cursor: pointer;
  }
  >*:not(.time):hover{
    transform:scale(1.05);
  }
}
.time{
  background-color:#777777;
  color: $white;
  width: calc(100% + 40px);
  text-align: center;
  transform: translateX(-20px);
  font-size: 23px;
}
.tem{
  color:$navyblue;
  font-size: 28px;
  margin: 5px 0 5px 0;
}
.ci,.wx{
  color:$royalblue;
  font-size: 20px;
  margin:4px 0px;
}
.pop{
  color:$navyblue;
}
</style>