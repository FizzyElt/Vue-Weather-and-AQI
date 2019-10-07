<template>
  <div class="AQI">
    <nav-bar />
    <nav class="control-nav">
      <color-introduction/>
      <search-input v-on:searchTxt="inputChange"/>
    </nav>
    
       
    <div class="AQI-container">
        <transition-group name="scale" tag="ul">
          <AQIItem v-for="item in AQIList" :key="item.SiteId" :obj="item"/>
        </transition-group>
    </div>
    
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import ColorIntroduction from '../components/ColorIntroduction.vue'
import SearchInput from '../components/SearchInput.vue'
import AQIItem from '../components/AQIItem';
export default {
  components: {
    NavBar,
    ColorIntroduction,
    SearchInput,
    AQIItem
  },
  data(){
    return{
      inputTxt:''
    }
  },
  computed:{
    AQIList(){
      if(this.inputTxt!==''){
        let list=this.$store.state.AQIData;
        return list.filter((i)=>{
          return i.County.indexOf(this.inputTxt)!==-1;
        })
      }
      return this.$store.state.AQIData;
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
          this.$store.commit("AQIDataUpdate", res.sort((a,b)=>a.County<b.County?1:-1));
          //this.AQIList=res;
          this.$store.commit("loadingSwich", false);
        })
        .catch(err => {
          this.$store.commit("loadingSwich", false);
          alert("取得資料時發生錯誤");
        });
    },
    inputChange(txt){
      this.inputTxt=txt;
    }
  },
  created() {
    this.getAQIData();
  }
};
</script>
<style lang="scss" scoped>
.control-nav{
  display: flex;
  margin:20px 0;
  align-items: center;
  justify-content: center;
}
.AQI-container{
  ul{
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
  }
}
@media screen and (max-width:800px ){
  .control-nav{
    flex-direction: column;
  }
}
</style>