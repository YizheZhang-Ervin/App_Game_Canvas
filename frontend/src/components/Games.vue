<template>
  <div
    style="overflow-y: auto; overflow-x: auto; padding-top: 2%" id="content001">
    <div style="height:5%"></div>
    <div style="width: 300%; height: 95%">
      <a-card hoverable style="display: inline-block;margin:0 1%" :bodyStyle="cardStyle" :bordered='false'>
        <h1 class="gold">海洋冒险王</h1>
        <p class="gold">网页端(双人版)</p>
        <img
          :src="pics.example"
        />
      </a-card>

      <a-card hoverable style="display: inline-block;margin:0 1%" :bodyStyle="cardStyle" :bordered='false'>
        <h1 class="gold">海洋冒险王</h1>
        <p class="gold">网页端(单人版)</p>
        <img
          :src="pics.example"
        />
      </a-card>

      <a-card hoverable style="display: inline-block;margin:0 1%" :bodyStyle="cardStyle" :bordered='false'>
        <h1 class="gold">海洋冒险王</h1>
        <p class="gold">手机端(单人版)</p>
        <img
          :src="pics.example"
        />
      </a-card>

      <a-card hoverable style="display: inline-block;margin:0 1%" :bodyStyle="cardStyle" :bordered='false'>
        <h1 class="gold">更多游戏</h1>
        <p class="gold">点击查看更多</p>
        <img
          :src="pics.example"
        />
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      cardStyle:{
        backgroundColor:"rgb(0,0,0)"
      },
      pics: {
        example: require("../assets/example.jpg"),
      },
    };
  }
};
</script>

<style scoped>
#content001::-webkit-scrollbar {
  /*滚动条整体样式*/
  height: 7px;
  width: 7px;
}
#content001::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: gold;
}
#content001::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  background: transparent;
}

.gold{
  color:gold!important;
}

p,h1{
  text-align: center;
}
</style>