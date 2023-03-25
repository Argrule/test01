<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- use el-button -->
    <el-button type="primary" @click="sayhi">HELLO</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// use moudle declared by yourself
import testFunc from '../zmoudle/test02.js';
// pay attention to the order
console.log('%c the second time callback','color: purple')
testFunc()


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // not like code above,if code runs here,the order 1st and 2nd will be diff
  mounted(){
    // use moudle declared by yourself    
    // console.log('%c the second time callback','color: purple')
    // testFunc()
  },
  methods:{
    // show message tips
    sayhi(){
      this.$message('hi');
      // this.$message({
      //     message: 'hi',
      //     type: 'success'
      //   });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
