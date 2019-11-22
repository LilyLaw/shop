import Vue from 'vue'
import App from './App.vue'
import router from './router.js';

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

// 报错原因: new Vue({}) 里面应该写成router,才能被简写识别