<template>
  <div id="app">
    <!-- 顶部 -->
    <mt-header  title="Vue商城项目">
      <a  slot="left">
        <mt-button icon="back" @click="goBack()" v-show="isback"></mt-button>
      </a>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <router-view></router-view>
   
    <!-- 底部 Tabbar 区域 -->

     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/addlist">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge" id="badge">{{$store.getters.getAllCount == 0? '':$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/set">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isback:false,
    }
  },
  created () {
    //组件创建时，判断是否为home组件，来设置home组件下无返回按钮
    // console.log('this.$route.path:'+this.$route.path)
    if(this.$route.path == '/home'){
      this.isback = false
    }else{
      this.isback = true
    }
  },
  watch: {
    //监听路由 设置home组件下无返回按钮
    $route(to) {
        //console.log('to.path:'+to.path);
        if(to.path == '/home'){
          this.isback = false
        }
        else{
          this.isback = true;
        }
			}
  },
  methods: {
    goBack(){
      this.$router.history.go(-1);
    },
  }
}
</script>

<style scoped>
@import './assets/css/css.css';

#app{
  padding-bottom: 50px;
  background-color: white;
}
.actives{
    background-color: aquamarine
  }
a.mui-tab-item {
    text-decoration: none;
}
 .mui-bar-tab .mui-tab-item1.mui-active {
      color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
</style>
