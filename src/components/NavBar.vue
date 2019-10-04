<script>
import NavBtn from "./NavBtn.vue";
export default {
  components: {
    NavBtn
  },
  data() {
    return {
      btnList: [
        {
          title: "天氣預報",
          path: "/weather",
          icon: ""
        },
        {
          title: "空氣品質指標",
          path: "/AQI",
          icon: ""
        }
      ],
      activePath: ""
    };
  },
  methods: {},
  created() {
    this.activePath = this.$route.path;
  }
};
</script>
<template>
  <div class="nav-bar">
    <div class="title">
      <font-awesome-icon icon="sun" class="icon" />
      <h2>氣象與空氣品質</h2>
    </div>
    <ul class="path-list">
      <input type="checkbox" name id="nav-btn" />
      <label for="nav-btn" class="mobile-btn">
        <font-awesome-icon class="icon" icon="bars" />
      </label>
      <ul>
        <li v-for="item in btnList" :key="item.path">
          <nav-btn
            :title="item.title"
            :path="item.path"
            :active="item.path===activePath?true:false"
          />
        </li>
      </ul>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
//@import "D:\\網頁\\VueWeatherAQI\\src/css/variables.scss";

.nav-bar {
  background-color: $white;
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  * {
    color: $navyblue;
  }
}
.title {
  display: flex;
  align-items: center;
  .icon {
    font-size: 40px;
    margin-right: 10px;
    //animation: circle 5s linear infinite;
  }
}
.path-list {
  display: flex;
  position: relative;
  ul {
    display: flex;
  }
  li {
    margin-right: 20px;
  }
}
#nav-btn {
  display: none;
}
.mobile-btn {
  display: none;
}
.icon {
  font-size: 35px;
}
@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and(max-width: 700px) {
  .mobile-btn {
    display: block;
  }
  .path-list {
    display: flex;
    position: relative;
    ul{
      flex-direction: column;
      align-items: stretch;
      position: absolute;
      padding: 8px;
      width: 200px;
      transform: translate(calc(-100% + 45px), 40px);
      z-index: 100;
      overflow: hidden;
      background-color: $bluegreen;
      opacity: 0;
      transition: 0.3s;
      display: none;
    }
    li {
      display: flex;
      margin: 0;
      margin-bottom: 5px;
    }
  }
  #nav-btn:checked ~ ul {
    display: flex;
    animation: fade 0.3s linear;
    opacity: 1;
  }
}
@keyframes fade {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>