<template>
    <div class="hnews">
        <div class="top">
            <img :src="Timg" alt="" >
            <h3>欢迎来到新闻列表</h3>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList.message" :key="item.id">
                <router-link :to="'/home/hnews/hnewsinfo/'+item.title" class="ahews">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{time}} <span class="pull-right">{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>
		</ul>
        
    </div>
</template>
<script>
import storeges from '../../model/storege.js'
export default {
    data () {
        return {
            msg:'home-news',
            newsList:[],
            time:'',
            Timg:''
        }
    },
    created () {
      this.getNewsData();
      this.getTime()  
    },
    methods: {
        getTime(){
           this.time= storeges.getData()
        },
        getNewsData(){
            var api ='/static/data/news.json'
            this.$http.get(api).then((res)=>{
                this.newsList = res.data;
                this.Timg = res.data.imgs
                console.log(this.newsList)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped> 
   .hnews .ahews{
       text-decoration: none
   }
  .hnews .top{  
      height: 150px;
      position: relative;  
  }
  .hnews .top img{
      width: 100%;
      height: 100%;
  }
  .hnews .top h3{
      position:absolute;
      color: white;
      font-size: 16px;
      margin: 0px;
      text-align: center;
      left: 34%;
      top: 50%;
  }
  .mui-table-view li.mui-table-view-cell.mui-media{
      height: 100px;
  }
 .mui-table-view .mui-media-object{
      height: 75px;
      width: 115px;
      max-width: 115px;
  }
  .mui-media-body {
    padding-top: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
  }
  .mui-media-body p.mui-ellipsis{
    margin-top: 19px;
    font-size: 12px;
  }
</style>
