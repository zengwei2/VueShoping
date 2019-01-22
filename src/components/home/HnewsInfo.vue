<template>
    <div class="hnewsinfo">
        <!-- 大标题 -->
        <h3 class="btitle" >{{this.$route.params.title}}</h3>
        <!-- 子标题 -->
        <p class="stitle">
            <span class="pull-left">发表时间:{{time}}</span>
            <span class="pull-right">点击次数: {{List.click}} 次</span>
        </p>
        <div class="clearfix"></div>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="List.content"> </div>

        <!-- 评论区域 -->
        <v-comment></v-comment>
    </div>
</template>
<script>
import storeges from '../../model/storege.js'
import Comment from '../Subcomponent/Comment.vue'
export default {
    data () {
        return {
            msg:'新闻详情',
            List:{},
            time:'',
        }
    },
    components: {
        'v-comment':Comment
    },
    created () {
      this.getHnewsInfo(); 
       this.getTime() 
    },
    methods: {
        getTime(){
           this.time= storeges.getData()
        },
        getHnewsInfo(){
            var api  = '/static/data/newsinfo.json';
            this.$http.get(api).then((res)=>{
                this.List = res.data.message[0]
                console.log(this.List)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>

    .hnewsinfo {
        padding: 5px;
    }
    .hnewsinfo h3.btitle{
        font-size: 20px;
        margin-bottom: 9px;
    }
    hr{
        border-top:1px solid #4ea8e8
    }
</style>

