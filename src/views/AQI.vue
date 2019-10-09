<template>
  <div class="AQI">
    <nav-bar />
    <nav class="control-nav">
      <color-introduction />
      <search-input v-on:searchTxt="inputChange" />
    </nav>

    <div class="main-content">
      <div class="AQI-container">
        <transition-group name="scale" tag="ul">
          <AQIItem v-for="item in AQIList" :key="item.SiteId" :obj="item" v-on:sendId="siteChange"/>
        </transition-group>
      </div>
      <transition name="fade">
      <a-q-i-detail-card :AQIObj="AQIDetail" v-if="mobileCheck" v-on:close="AQICardSw"/>
    </transition>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import ColorIntroduction from "../components/ColorIntroduction.vue";
import SearchInput from "../components/SearchInput.vue";
import AQIItem from "../components/AQIItem";
import AQIDetailCard from "../components/AQIDetailCard.vue";
export default {
  components: {
    NavBar,
    ColorIntroduction,
    SearchInput,
    AQIItem,
    AQIDetailCard
  },
  data() {
    return {
      inputTxt: "",
      siteId: "",
      detailOpened: false
    };
  },
  computed: {
    AQIList() {
      if (this.inputTxt !== "") {
        let list = this.$store.state.AQIData;
        return list.filter(i => {
          return i.County.indexOf(this.inputTxt) !== -1;
        });
      }
      return this.$store.state.AQIData;
    },
    AQIDetail() {
      if (this.siteId !== "") {
        return this.$store.state.AQIData.find(d => d.SiteId === this.siteId);
      }
      return this.$store.state.AQIData[0];
    },
    mobileCheck(){
      const width=document.documentElement.clientWidth;
      if(width<1000){
        return this.detailOpened
      }
      return true
    }
  },
  methods: {
    getAQIData() {
      this.$store.commit("loadingSwich", true);
      this.$jsonp(
        "https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json&token=f2SCGi1MtkGSeuA1tQBhqA"
      )
        .then(res => {
          //console.log(res);
          this.$store.commit(
            "AQIDataUpdate",
            res.sort((a, b) =>
              parseInt(a.SiteId) > parseInt(b.SiteId) ? 1 : -1
            )
          );
          //this.AQIList=res;
          this.$store.commit("loadingSwich", false);
        })
        .catch(err => {
          this.$store.commit("loadingSwich", false);
          alert("取得資料時發生錯誤",err);
        });
    },
    inputChange(txt) {
      this.inputTxt = txt;
    },
    siteChange(id,isOn){
      console.log('change')
      this.siteId=id;
      this.detailOpened=isOn;
    },
    AQICardSw(isOn){
      this.detailOpened=isOn;
    }
  },
  created() {
    this.getAQIData();
  }
};
</script>
<style lang="scss" scoped>
.control-nav {
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
}
.main-content{
  max-width:1300px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
.AQI-container {
  width: 820px;
  background-color: $bluegreen;
  border-radius: 8px;
  padding: 10px;
  ul {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    height: 510px;
    overflow: auto;
    margin: auto;
    flex-wrap: wrap;
    scrollbar-width: thin;
  }
}
@media screen and (max-width: 800px) {
  .control-nav {
    flex-direction: column;
  }
}

@media screen and(max-width:1200px) {
  .AQI-container{
    max-width: 550px;
  }
}
@media screen and(max-width:580px) {
  .AQI-container{
    max-width: 300px;
  }
}
</style>