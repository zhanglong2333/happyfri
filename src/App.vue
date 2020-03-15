<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
/* 引入外部css使用@import  style中使用的是stylus语法 
    需要在哪个组件中引用就在那个组件中引用
    注意点：一定要引入到#app上面!!!
    如果全局的需要在main.js中引入
*/
@import "./style/common.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
