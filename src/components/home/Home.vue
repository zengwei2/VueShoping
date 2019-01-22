<template>
  <div class="waimai">
    <!-- 轮播图 -->
    <v-lunbotu :imgList="imgList" :isfull='true'></v-lunbotu>

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/hnews">
            <img src="../../dist/img/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
            <img src="../../dist/img/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
              <img src="../../dist/img/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/hwords">
              <img src="../../dist/img/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/hvideo">
              <img src="../../dist/img/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/hconnect">
            <img src="../../dist/img/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
import lunbotu from "../Subcomponent/LunBotu.vue";
export default {
  name: 'WaiMai',
  data () {
    return {
      msg:'waimai',
      imgList:''
    }
  },
  created () {
    this.getImg()
  },
  methods: {
    getImg(){
      var api = '/static/data/lbt.json'
      this.$http.get(api).then((res)=> {
        this.imgList = res.data
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  components: {
    'v-lunbotu':lunbotu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  .mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 img{
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9  .mui-media-body{
   font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
