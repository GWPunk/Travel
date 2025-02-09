import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'default-passive-events'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', function () {
  fastClick.attach(document.body);
}, false);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')