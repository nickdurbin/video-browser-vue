import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App) 
  // h is the equivalent of createElement
  // h is industry standard apparently
}).$mount('#app')

