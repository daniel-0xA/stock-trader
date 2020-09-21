import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import store from './store'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.filter('currency', (value) =>{
  return '$' + value.toLocaleString()
})
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  store,
  router
}).$mount('#app')
