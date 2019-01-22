// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


import './dist/css/mui.min.css' //引用mui样式
import './dist/js/mui'
import './dist/css/icons-extra.css'

import axios from 'axios'
Vue.prototype.$http = axios

import Resource from 'vue-resource'
Vue.use(Resource)
import store from './vuex/store.js'

//使用mint-ui插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
/* import Cube from 'cube-ui'
Vue.use(Cube)  */
//引入vue-scroller下拉刷新插件
import VueScroller  from 'vue-scroller'
Vue.use(VueScroller)

import './assets/css/css.css'

Vue.config.productionTip = false


//PhotoSwipe图片预览插件 defalut install
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//表单验证插件vue-j-validator
import validator from "vue-j-validator";
 Vue.use(validator);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
