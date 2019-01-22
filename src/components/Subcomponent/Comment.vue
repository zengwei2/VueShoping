<template>
    <div id="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea cols="20" rows="5" placeholder="用户发表评论不超过120个字" maxlength="120" v-model="texts"></textarea>
        <mt-button type='primary' size="large" @click="getSubmit()">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,key) in commentList">
                <div class="cmt-title">第{{key+1}}楼&nbsp;&nbsp;用户: {{item.username}}&nbsp;&nbsp;发表时间: {{item.addtime}}</div>
                <div class="cmt-body">
                    {{item.content.length==0? '此用户未发表评论':item.content}}
                </div>
            </div>
        </div>
        <mt-button type='danger' plain size="large" @click="getMore()">加载更多...</mt-button>
    </div>
</template>
<script>
import storeges from '../../model/storege.js'
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            msg:'comment组件',
            commentList:[],
            texts:''
        }
    },
    created () {
      this.getList()  
    },
    methods: {
        getSubmit(){
            if(this.texts.trim().length ==0){
               return Toast('评论内容不能为空!')
            }
            var clist=({
                "username":"匿名用户",
                "addtime":storeges.getData(),
                "content":this.texts.trim()
            });
            this.commentList.unshift(clist)
            this.texts = ''
        },
        getList(){
            var api = '/static/data/comment.json'
            this.$http.get(api).then((res)=>{           
                this.commentList = res.data.comment                      
                console.log(res.data.comment)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getMore(){
            var api = '/static/data/comment.json'
            this.$http.get(api).then((res)=>{           
               this.commentList = this.commentList.concat(res.data.comments)                      
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped>
    #comment h3{
        font-size: 16px;
        margin: 0px;
    }
    #comment textarea{
        font-size: 16px;
        margin: 0px;
        padding: 5px 10px
    }
    #comment .cmt-item{
        font-size: 13px;
    }
    #comment .cmt-title{ 
        background-color: #ccc;
        line-height: 30px;
    }
    #comment .cmt-body{
         line-height: 35px;
         text-indent: 2em;
    }
    hr{
        border-top:1px solid #4ea8e8
    }
</style>
