<template>
  <div id="div001" ondragstart="return false" oncontextmenu="return false" onselectstart="return false">
    <canvas id="canvas" :height="browser.H" :width="browser.W"></canvas>
    <canvas id="heroCanvas" :height="browser.H" :width="browser.W"></canvas>
    <canvas id="bulletCanvas" :height="browser.H" :width="browser.W"></canvas>
    <canvas id="enemyCanvas" :height="browser.H" :width="browser.W"></canvas>
    <div>
      <input id="leftBtn" type="button" value="L" class="noselect">
      <input id="rightBtn" type="button" value="R" class="noselect">
      <input id="upBtn" type="button" value="Up" class="noselect">
      <input id="downBtn" type="button" value="Down" class="noselect">
    </div>
  </div>
</template>

<script>
import start from '../static/GameLibrary/game1lib.js';
export default {
  name: "Game1",
  data() {
    return {
      browser:{
        H:0.99*(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
        W:1*(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
      }
    };
  },
  mounted() {
    start();
  },
  methods:{

  }
};
</script>

<style scoped>
* {
  margin: 0;
}
canvas {
  box-shadow: 0 0 10px #333;
}
#heroCanvas,
#bulletCanvas,
#enemyCanvas {
  position: absolute;
  left: 0;
  top: 0;
}
.noselect{
  -moz-user-select:none;
  -webkit-user-select:none;
  user-select:none;
}
</style>