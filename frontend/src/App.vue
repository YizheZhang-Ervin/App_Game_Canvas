<template>
  <div id="app">
    <!-- <Home msg="EGGroup"/> -->
    <router-view></router-view>
    <a-back-top />
  </div>
</template>

<script>
// import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: times, Verdana,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content001::-webkit-scrollbar {
  /*滚动条整体样式*/
  height: 7px;
  width: 7px;
}
.content001::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: gold;
}
.content001::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: transparent;
}

.gold {
  color: gold !important;
}

</style>
