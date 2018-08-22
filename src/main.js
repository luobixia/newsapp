import Vue from 'vue';
import App from './App.vue';
//要用路由，就要导入
import router from './js/router.js';
//引入vue-router保证这里不出错
import VueRouter from 'vue-router';
import "./assets/css/cssreset.css";
import MintUi from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import axios from 'axios' ;// 在这里引入axios
Vue.prototype.$axios = axios;   // 在vue中使用axios，全局
import VueResource from 'vue-resource' ;
import Vuex from 'vuex';

Vue.use(Vuex);
//让vue使用VueRouter
Vue.use(VueRouter);
Vue.use(MintUi);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
