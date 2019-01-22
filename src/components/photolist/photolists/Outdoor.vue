<template>
    <div>
        <!-- 滑动区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item" @click.prevent="ToPhotoShare()">
                        推荐
                    </a>
                    <a class="mui-control-item mui-active" @click.prevent="ToOutdoor()" >
                        户外
                    </a>
                    <!-- <router-link class="mui-control-item" to="/home/goodslist/goodsinfo">
                        风景
                    </router-link> -->
                    <a class="mui-control-item" @click.prevent="ToView()">
                        风景
                    </a>
                    <a class="mui-control-item" @click.prevent="ToCar()">
                        汽车
                    </a>
                    <a class="mui-control-item" @click.prevent="ToAnimal()">
                        动物
                    </a>
                    <a class="mui-control-item" @click.prevent="ToFood()">
                        美食
                    </a>
                    <a class="mui-control-item" @click.prevent="ToFruit()">
                        水果
                    </a>
				</div>
			</div>
		</div>
         <!-- 内容区域 -->
        <!-- <ul class="photo-list">
            <router-link v-for="item in list" to="/home/photolist/photoinfo" tag="li" :key="item.id">
                <img v-lazy="item.imgUrl">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul> -->
        <div class="scrollerWrap"> 
            <scroller  height="100%" :on-refresh="refresh" :refreshText="refreshText" refreshLayerColor="#00f1ff"  ref="scrollerBottom">
                
                <main class="scrollerContent">
                   <ul class="photo-list">
                        <router-link v-for="(item,key) in list" to="/home/photolist/photoinfo" tag="li" :key="key">
                            <img v-lazy="item.imgUrl">
                            <div class="info">
                                <h1 class="info-title">{{ item.title }}</h1>
                                <div class="info-body">{{ item.zhaiyao }}</div>
                            </div>
                        </router-link>
                    </ul>
                </main>
            </scroller>
        </div>
       
    </div>
</template>
<script>
import mui from "../../../dist/js/mui.min.js";
export default {
    data () {
        return {
            msg:'户外',
            list:[],
            refreshText:'加载中',
        }
    },
    created () {
       this.getRecom()
    },
    methods: {
        getRecom() {
            var api = '/static/data/photolist.json'  
            this.$http.get(api).then((res)=>{
                this.list = res.data.message3;
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getRecoms() {
            var api = '/static/data/photolist.json'  
            this.$http.get(api).then((res)=>{
                this.list = this.list.concat(res.data.message3); //数组拼接
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        //下拉刷新
        refresh(){     
            setTimeout(function(){
              this.getRecoms()
              this.refreshText = '加载完成'
              this.$refs.scrollerBottom.finishPullToRefresh()  //停止下拉刷新
            }.bind(this),1000);
        },
        //点击进入推荐页面
        ToPhotoShare(){
            this.$router.push('/home/photolist')
        },
        //点击进入户外页面
        ToOutdoor(){
            this.$router.push('/home/outdoor')
        },
        //点击进入风景页面
        ToView(){
            this.$router.push('/home/view')
        },
        //点击进入汽车页面
        ToCar(){
            this.$router.push('/home/car')
        },
         //点击进入动物页面
        ToAnimal(){
            this.$router.push('/home/animal')
        },
        //点击进入美食页面
        ToFood(){
            this.$router.push('/home/food')
        },
        //点击进入水果页面
        ToFruit(){
            this.$router.push('/home/fruit')
        }
        
    },
    mounted () { //dom元素加载完之后执行里面的方法
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>
<style>
/* 使用全局样式样式去掉 */
 * { touch-action: pan-y; } 
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
}
.photo-list li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
}
.photo-list li img{
    width: 100%;
    vertical-align: middle;
}
.photo-list li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list li .info{
    color: white;
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
}
.photo-list li .info .info-title{
    font-size: 14px
}
.photo-list li .info .info-body{
    font-size: 13px
}

.scrollerWrap{
    position:absolute;
    width:100%;
    height:90%;/* 有header的时候可能会出现滚动条，所以最好高度是除去header的高度 */
    top:75px;/* 一般页面有header的时候需要留出header的高度 */
    bottom:20px;
  }
  .scrollerContent{
    padding: 7px;
    padding-top: 0px;
  }
 .scrollerWrap main{
      height:100%;
    }
</style>
