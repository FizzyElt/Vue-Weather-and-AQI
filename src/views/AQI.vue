<template>
  <div class="AQI">
    <nav-bar />
    <div class="AQI-container">
        
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  methods: {
    getAQIData() {
      this.$store.commit("loadingSwich", true);
      this.$jsonp(
        "https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json&token=f2SCGi1MtkGSeuA1tQBhqA"
      )
        .then(res => {
          //console.log(res);
          this.$store.commit("AQIDataUpdate", res);
          this.$store.commit("loadingSwich", false);
        })
        .catch(err => {
          this.$store.commit("loadingSwich", false);
          alert("取得資料時發生錯誤");
        });
    }
  },
  created() {
    //this.getAQIData();
  }
};
</script>
<style lang="scss" scoped>
</style>