import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './scss/common.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCloudSun, faTemperatureHigh, faSun, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faCloudSun, faTemperatureHigh, faSun, faChevronRight, faChevronLeft);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
