<template>
  <a-layout :style="bgi">
    <a-layout-sider style="padding-top: 2%">
      <a-timeline mode="alternate" pending="Future..." class="gold">
        <a-timeline-item color="gold" class="gold"
          >2020.11.11<br />成立日<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2021.11.11<br />一周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2022.11.11<br />两周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2023.11.11<br />三周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2024.11.11<br />四周年<br
        /></a-timeline-item>
        <a-timeline-item color="gold" class="gold"
          >2025.11.11<br />五周年<br
        /></a-timeline-item>
      </a-timeline>
    </a-layout-sider>
    <a-layout-content
      style="overflow-y: auto; overflow-x: auto; padding-top: 2%"
      class="content001"
    >
      <p style="text-align: center; font-size: 1.5em">Introduction</p>
      <a-row type="flex" justify="center">
        <ul
          style="
            text-align: left;
            list-style-type: square;
            list-style-position: inside;
          "
        >
          <li>
            EGGroup，又称为EGoldGame集团，应援色为黑金，诞生于2020.11.11
          </li>
          <li>
            主要业务包括线下游戏 (现实活动类游戏)以及线上游戏 (电子游戏)
          </li>
          <li>现实活动类游戏包括但不局限于桌面游戏、户外拓展游戏</li>
          <li>电子游戏包括但不局限于网页端、手机端等多端游戏</li>
        </ul>
      </a-row>
      <p style="text-align: center; font-size: 1.5em">Group Members</p>
      <a-row type="flex" justify="space-around">
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.ervin" />
            <h1 class="gold">张以哲</h1>
            <p>CKO (首席知识官)</p>
            <p>CEO (首席工程官)</p>
            <a href="https://ervinzhang.pythonanywhere.com" target="_blank"
              >个人主页</a
            >
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.sky" />
            <h1 class="gold">何仕杰</h1>
            <p>CPO (首席心理官)</p>
            <p>COO (首席运营官)</p>
            <a
              href="https://www.linkedin.com/in/%E4%BB%95%E6%9D%B0-%E4%BD%95-98a516190/"
              target="_blank"
              >个人主页</a
            >
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.colin" />
            <h1 class="gold">石烜逵</h1>
            <p>CCO (首席文化官)</p>
            <p>CDO (首席数据官)</p>
            <a
              href="https://www.linkedin.com/in/%E7%83%9C%E9%80%B5-%E7%9F%B3-17162219a/"
              target="_blank"
              >个人主页</a
            >
          </a-card>
        </a-col>
        <!-- <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.lqj" />
            <h1 class="gold">陆其杰</h1>
            <p>CQO (首席探索官)</p>
            <p>CBO (首席商务官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">陈灵健</h1>
            <p>CHO (首席英雄官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">任仕琪</h1>
            <p>CRO (首席浪漫官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">许诗婷</h1>
            <p>CFO (首席时尚官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">陈倩</h1>
            <p>CJO (首席欢乐官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">黄希</h1>
            <p>CSO (首席秘密官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">卢彦池</h1>
            <p>CXO (首席体验官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">周浩</h1>
            <p>CLO (首席试验官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">朱新宇</h1>
            <p>CNO (首席自然官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">陆祎程</h1>
            <p>CWO (首席愿望官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">苗胜利</h1>
            <p>CVO (首席评估官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">薛丹诚</h1>
            <p>CMO (首席机制官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">徐轲</h1>
            <p>CUO (首席联合官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">刘家豪</h1>
            <p>CZO (首席地区官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card
            :bordered="false"
            class="gold"
            style="background: transparent"
          >
            <img :src="pics.clj" />
            <h1 class="gold">杜鹏宇</h1>
            <p>CYO (首席谈话官)</p>
            <a href="#" target="_blank">个人主页</a>
          </a-card>
        </a-col> -->
      </a-row>
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
  /* border-right: 1px solid gold; */
}

.ant-layout-content {
  background: rgba(0, 0, 0, 0.7);
  color: gold;
}

</style>