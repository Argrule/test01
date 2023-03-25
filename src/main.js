import Vue from 'vue'
import App from './App.vue'

// use moudle declared by yourself
import testFunc from '../zmoudle/test02.js';
console.log('%c the first time callback','color: purple')
testFunc()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
