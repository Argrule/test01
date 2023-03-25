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
console.log('%c the second time callback','color: purple')
testFunc()


export default {
  name: 'App',
  components: {
    HelloWorld
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
