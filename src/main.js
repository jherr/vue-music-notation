import Vue from 'vue'
import App from './App.vue'
import music from './index';

Vue.use(music);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
