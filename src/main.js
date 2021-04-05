import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueMeta from 'vue-meta';
import { ValidationProvider } from 'vee-validate';
require('./helpers/vee-validate');
import { interceptor_axios } from './helpers/interceptor';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.component('ValidationProvider', ValidationProvider);

interceptor_axios.setup_request();
interceptor_axios.setup_response();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
