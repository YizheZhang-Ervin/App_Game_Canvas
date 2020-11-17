import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { Menu,Icon,Layout,Row,Col,Card,BackTop,Timeline,Divider} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Home from './components/Home.vue'
import Game1 from './components/Game1.vue'

Vue.config.productionTip = false

const Components = [Menu,Icon,Layout,Row,Col,Card,BackTop,Timeline,Divider];
Components.map(com=>{
  Vue.use(com);
});

Vue.use(VueRouter);

const routes = [
  { path: '', component: Home },
  { path: '/games/game1', component: Game1 }
]

const router = new VueRouter({
  routes:routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),router
}).$mount('#app')
