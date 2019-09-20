import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:true,
    weatherToken:'CWB-7119ECA8-257C-4ECF-ADF1-86E97EAE5463',
    weatherData:[],
    currentLocation:"新北市"
  },
  mutations: {
    weatherDataUpdate(state,data=[]){
      state.weatherData=data;
    },
    loadingSwich(state,sw=true){
      state.isLoading=sw;
    },
    locationChange(state,name=''){
      state.currentLocation=name;
    }
  },
  actions: {

  }
})
