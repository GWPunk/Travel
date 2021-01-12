import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'default-passive-events'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
