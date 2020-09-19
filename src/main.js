import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes} from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: function (h) { return h(App) },
  store,
  router
}).$mount('#app')
