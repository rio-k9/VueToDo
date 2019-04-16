/*jshint esversion: 6 */

/* What you are looking at here Rio is similar to what you created in Registration,
this is your master JS file where you are importing your controllers AKA Vues */

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  //Render App AKA Controllers
  render: h => h(App),
}).$mount('#app');
