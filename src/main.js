import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

import './assets/css/base.css' //公共资源  css本身暴露
import './assets/css/style.css'
// import './assets/css/LArea.css'
// import './assets/css/LCalendar.css'
// import './assets/css/mobileSelect.css'

import './assets/js/jquery-1.7.2'
import './assets/js/flexible.min.js'
// import './assets/js/AreaData.json'
// import './assets/js/LArea.js'
// import './assets/js/LCalendar.js'
// import './assets/js/LAreaData2.js'
// import './assets/js/mobileSelect.js'
// import './assets/js/tab.js'
import axios from './plugins/axios';
Vue.use(axios);

//注册全局过滤器
// import fillters from './filters'

// Object.keys(fillters).forEach(key=>Vue.filter(key,fillters[key]))
import fillters from './filters'
Object.keys(fillters).forEach(key=>Vue.filter(key,fillters[key]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
