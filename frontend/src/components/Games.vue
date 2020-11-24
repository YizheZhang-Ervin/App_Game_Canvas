<template>
  <div
    style="overflow-y: auto; overflow-x: auto; padding-top: 2%"
    class="content001"
  >
    <div style="height: 5%"></div>
    <div style="width: 300%; height: 95%">
      <router-link to="/games/game1" target="_self">
        <a-card
          hoverable
          style="display: inline-block; margin: 0 1%"
          :bodyStyle="cardStyle"
          :bordered="false"
        >
          <h1 class="gold">海龙吟·妄念</h1>
          <p class="gold">页游/网游</p>
          <img :src="pics.example" />
        </a-card>
      </router-link>

      <router-link to="/games/game1" target="_self">
        <a-card
          hoverable
          style="display: inline-block; margin: 0 1%"
          :bodyStyle="cardStyle"
          :bordered="false"
        >
          <h1 class="gold">海龙吟·觉他</h1>
          <p class="gold">手游</p>
          <img :src="pics.example" />
        </a-card>
      </router-link>

      <a-card
        hoverable
        style="display: inline-block; margin: 0 1%"
        :bodyStyle="cardStyle"
        :bordered="false"
      >
        <h1 class="gold">海龙吟·纷争</h1>
        <p class="gold">桌游</p>
        <img :src="pics.example" />
      </a-card>
      <a-card
        hoverable
        style="display: inline-block; margin: 0 1%"
        :bodyStyle="cardStyle"
        :bordered="false"
      >
        <h1 class="gold">海龙吟·团战</h1>
        <p class="gold">户外拓展</p>
        <img :src="pics.example" />
      </a-card>
      <a-card
        hoverable
        style="display: inline-block; margin: 0 1%"
        :bodyStyle="cardStyle"
        :bordered="false"
      >
        <h1 class="gold">更多游戏</h1>
        <p class="gold">点击查看更多</p>
        <img :src="pics.example" />
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      cardStyle: {
        backgroundColor: "rgb(0,0,0)",
      },
      pics: {
        example: require("../assets/example.jpg"),
      },
    };
  },
};
</script>

<style scoped>
p,
h1 {
  text-align: center;
}
</style>