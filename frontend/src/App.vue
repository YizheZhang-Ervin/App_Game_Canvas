<template>
  <div id="app">
    <Home msg="EGGroup"/>
    <a-back-top />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: times, Verdana,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
