<template>
  <div id="app">
    <h1>Vue-Router</h1>
    <router-link to="./">主页</router-link>
    <router-link to="home">首页</router-link>
    <router-link to="Content">内容页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
