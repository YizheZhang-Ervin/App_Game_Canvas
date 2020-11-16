import Vue from 'vue'
import App from './App.vue'
import { Menu,Icon,Layout,Row,Col,Card,BackTop,Timeline} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false

const Components = [Menu,Icon,Layout,Row,Col,Card,BackTop,Timeline];
Components.map(com=>{
  Vue.use(com);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
