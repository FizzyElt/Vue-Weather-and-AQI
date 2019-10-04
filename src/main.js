import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import './scss/common.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudSun, faTemperatureHigh, faSun, faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add( faCloudSun, faTemperatureHigh, faSun, faChevronRight, faChevronLeft,faBars);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueJsonp);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
