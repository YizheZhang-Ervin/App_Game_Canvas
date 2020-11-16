<template>
  <div :style="autoHeight" id="components-layout-demo-basic">
    <a-layout style="height:100%">
      <a-layout-header>
        <p><a href="/" style="color:gold">{{msg}}</a></p>  
        <a-menu mode="horizontal" :default-selected-keys="['home']">
          <a-menu-item key='home' @click="changeComponent('home')">Home</a-menu-item>
          <a-menu-item key="game" @click="changeComponent('game')">Game</a-menu-item>
          <a-menu-item key='group' @click="changeComponent('group')">Group</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <a-row type='flex' justify="center" style="height:100%">
          <a-col :span="18" style="height:100%">
            <Games style="height:100%" v-show="displayStatus.games"></Games>
            <Group style="height:100%" v-show="displayStatus.group"></Group>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer>Design By EG Group</a-layout-footer>
    </a-layout>
  </div>
</template>

<script> 
import Group from './Group.vue';
import Games from './Games.vue';

export default {
    name: 'Home',
    components:{
      Group,
      Games
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
          home:true,
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
        if(key==="home"){
          this.displayStatus.home = true;
          this.displayStatus.games = false;
          this.displayStatus.group = false;
        }else if(key==="game"){
          this.displayStatus.home = false;
          this.displayStatus.games = true;
          this.displayStatus.group = false;
        }else if(key=="group"){
          this.displayStatus.home = false;
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


<style scoped>
p{
  color:gold;
  font-size: 2em;
  margin:0;
  width: fit-content;
  display: inline;
}

.ant-menu{
  float: right;
  line-height: 64px;
  color:gold!important;
  background:transparent;
}

.ant-menu-item{
  color:gold!important;
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
  background: rgba(0,0,0,0.9);
  color:gold;
  z-index: 10;
}

.ant-layout-footer{
  text-align: center;
}

.ant-layout-content{
  background:rgba(0,0,0);
  color:gold;
}

</style>