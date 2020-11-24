<template>
  <div>
    <div id="app">
      <!-- <Home msg="EGGroup"/> -->
      <router-view></router-view>
      <a-back-top />
    </div>
    <div id="backup">
      <h1>请打开自动旋转,并使用横屏访问页面</h1>
    </div>
  </div>
</template>

<script>
// import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    // Home
  },
  data(){
    return{}
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style>
@media(min-width:500px){
  #app{
    display: block;
  }
  #backup{
    display: none;
  }
}
@media(max-width:500px){
  #app{
    display: none;
  }
  #backup{
    display: flex;
  }
}
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
