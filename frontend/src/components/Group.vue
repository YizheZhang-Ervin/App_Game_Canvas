<template>
  <a-layout :style="bgi">
    <a-layout-sider style="padding-top: 2%">
      <a-timeline mode="alternate" pending="Future..." class="gold">
        <a-timeline-item color="gold" class="gold"
          >2020.11.11<br />成立日<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2022.11.11<br />一周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2023.11.11<br />两周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2024.11.11<br />三周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2025.11.11<br />四周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2026.11.11<br />五周年<br
        /></a-timeline-item>
      </a-timeline>
    </a-layout-sider>
    <a-layout-content
      style="overflow-y: hidden; overflow-x: scroll; padding-top: 2%"
      id="content001"
    >
    <p style="text-align:center;font-size:1.5em;">Group Members</p>
      <div style="width: 300%; height: 150%">
        <a-card
          :bordered="false"
          class="gold"
          style="background: transparent; float: left; width: 30em"
        >
          <img :src="pics.ervin" width="100%" />
          <h1 class="gold">张以哲</h1>
          <p>CKO (首席知识官)</p>
          <a href="https://ervinzhang.pythonanywhere.com" target="_blank"
            >个人主页</a
          >
        </a-card>
        <a-card
          :bordered="false"
          class="gold"
          style="background: transparent; float: left; width: 30em"
        >
          <img :src="pics.sky" width="100%" />
          <h1 class="gold">何仕杰</h1>
          <p>CPO (首席心理官)</p>
          <a
            href="https://www.linkedin.com/in/%E4%BB%95%E6%9D%B0-%E4%BD%95-98a516190/"
            target="_blank"
            >个人主页</a
          >
        </a-card>
        <a-card
          :bordered="false"
          class="gold"
          style="background: transparent; float: left; width: 30em"
        >
          <img :src="pics.colin" width="100%" />
          <h1 class="gold">石烜逵</h1>
          <p>CCO (首席内容官)</p>
          <a
            href="https://www.linkedin.com/in/%E7%83%9C%E9%80%B5-%E7%9F%B3-17162219a/"
            target="_blank"
            >个人主页</a
          >
        </a-card>
        <a-card
          :bordered="false"
          class="gold"
          style="background: transparent; float: left; width: 30em"
        >
          <img :src="pics.lqj" width="100%" />
          <h1 class="gold">陆其杰</h1>
          <p>CMO (首席市场官)</p>
          <a href="#" target="_blank">个人主页</a>
        </a-card>
        <a-card
          :bordered="false"
          class="gold"
          style="background: transparent; float: left; width: 30em"
        >
          <img :src="pics.clj" width="100%" />
          <h1 class="gold">陈灵健</h1>
          <p>CQO (首席质量官)</p>
          <a href="#" target="_blank">个人主页</a>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "Group",
  props: {
    groupDisplay: String,
  },
  data() {
    return {
      bgi: {
        background: "url(" + require("../assets/bg.jpg") + ")!important",
        backgroundSize: "cover",
      },
      pics: {
        ervin: require("../assets/ervin.jpg"),
        sky: require("../assets/sky.jpg"),
        colin: require("../assets/colin.jpg"),
        lqj: require("../assets/lqj.jpg"),
        clj: require("../assets/clj.jpg"),
      },
    };
  },
};
</script>

<style scoped>
.ant-layout-sider {
  background: rgba(0, 0, 0, 0.7);
  border-right: 1px solid gold;
}

.ant-layout-content {
  background: rgba(0, 0, 0, 0.7);
  color: gold;
}

.gold {
  color: gold !important;
}

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
</style>