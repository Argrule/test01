import Vue from 'vue'
import App from './App.vue'

/**
 * css in ElementUI,something will be wrong without css
*/
import 'element-ui/lib/theme-chalk/index.css';

/**
 * import all in ElementUI
*/
// import ElementUI from 'element-ui';
// Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

/**
 * only import those packets in need 
*/
import {Button} from 'element-ui'
Vue.use(Button)
import { Message } from 'element-ui';
Vue.prototype.$message=Message;
/**
 * use moudle declared by yourself
*/
import testFunc from '../zmoudle/test02.js';
console.log('%c the first time callback','color: purple')
testFunc()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
