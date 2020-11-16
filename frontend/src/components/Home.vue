<template>
  <div :style="autoHeight" id="components-layout-demo-basic">
    <a-layout style="height:100%">
      <a-layout-header  class="highz">
        <p class="logo"><a href="/" style="color:gold">{{msg}}</a></p>  
        <a-menu mode="horizontal" :default-selected-keys="['welcome']">
          <a-menu-item key='welcome' @click="changeComponent('welcome')">Home</a-menu-item>
          <a-menu-item key="game" @click="changeComponent('game')">Games</a-menu-item>
          <a-menu-item key='group' @click="changeComponent('group')">Group</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-row type='flex' justify="center" style="height:100%">
          <a-col :span="24" style="height:100%">
            <Welcome style="height:100%" v-show="displayStatus.welcome"></Welcome>
            <Games style="height:100%" v-show="displayStatus.games"></Games>
            <Group style="height:100%" v-show="displayStatus.group"></Group>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer class="highz">Design By EG Group</a-layout-footer>
    </a-layout>
  </div>
</template>

<script> 
import Group from './Group.vue';
import Games from './Games.vue';
import Welcome from './Welcome.vue';

export default {
    name: 'Home',
    components:{
      Group,
      Games,
      Welcome
    },
    props: {
        msg: String
    },
    data() {
      return {
        autoHeight: {
          height: ''
        },
        displayStatus:{
          welcome:true,
          games:false,
          group:false
        },
      }
    },
    methods: {
      getHeight() {
        this.autoHeight.height = (parseInt(window.innerHeight)) + 'px';
      },
      changeComponent(key){
        if(key==="welcome"){
          this.displayStatus.welcome = true;
          this.displayStatus.games = false;
          this.displayStatus.group = false;
        }else if(key==="game"){
          this.displayStatus.welcome = false;
          this.displayStatus.games = true;
          this.displayStatus.group = false;
        }else if(key=="group"){
          this.displayStatus.welcome = false;
          this.displayStatus.games = false;
          this.displayStatus.group = true;
        }
      }
    },
    mounted(){
        this.getHeight()
    }
}
</script>


<style>
li{
  font-size:1.2em;
}

.logo{
  color:gold;
  font-size: 2em;
  margin:0;
  width: fit-content;
  display: inline;
}

.ant-menu{
  float: right;
  line-height: 64px!important;
  color:gold!important;
  background:transparent;
}

.ant-menu-item{
  color:gold!important;
  background-color: rgba(0,0,0,0.9);
}

.ant-menu-item-selected{
  background-color: rgba(0,0,0)!important;
}

.ant-menu-horizontal{
  border-bottom:transparent;
}

.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover, .ant-menu-horizontal > .ant-menu-item-active, .ant-menu-horizontal > .ant-menu-submenu-active, .ant-menu-horizontal > .ant-menu-item-open, .ant-menu-horizontal > .ant-menu-submenu-open, .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-submenu-selected{
  border-bottom: 2px solid gold!important;
}

.ant-layout-header,.ant-layout-footer{
  background: rgba(0,0,0,0.9)!important;
  color:gold!important;
}

.ant-layout-footer{
  text-align: center;
}

.ant-layout-content{
  background:rgba(0,0,0);
  color:gold;
}

.highz{
  z-index: 10;
}

</style>