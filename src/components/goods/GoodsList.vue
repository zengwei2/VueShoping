<template>
    <div id="goodslist">
        <div class="goods-item" v-for="item in list" @click="goGoodsinfo(item.id)">
            <img :src="item.imgSrc" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price}}</span>
                    <span class="old">￥{{item.OldPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.num}}件</span>
                </p>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    data () {
        return {
            msg:'goodslist组件',
            list:[]
        }
    },
    created () {
      this.getList() 
    },
    methods: {
        getList(){
            var api = '/static/data/goods.json'
            this.$http.get(api).then((res)=>{
                this.list = res.data.message;
                console.log(res.data.message)
            }).catch((err)=>{
                console.log(err)
            })
        },
        //路由跳转导航
        goGoodsinfo(id){
            console.log(this)
             this.$router.push({ name: 'goodsinfo'})
             var goodslist = {
                id
             }
            //将对象传到vuex的store list里
            this.$store.commit('getList',goodslist)
        }
    },
    
}
</script>
<style scoped>
 #goodslist{
     display: flex;
     flex-wrap: wrap;
     padding:7px;
     justify-content: space-between;
 }

  #goodslist .goods-item{
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      padding: 2px;
      margin: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
     
  }
  #goodslist .goods-item img{
      width: 100%;
  }
  #goodslist .goods-item .title{
      font-size: 13px;
      color: #777;
      line-height: 16px;
  }
  #goodslist .goods-item .info{
      background-color: #eee;
  }
  #goodslist .goods-item .info p{
      margin: 0;
      padding: 3px
  }
  #goodslist .goods-item .info p .now{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
    #goodslist .goods-item .info p .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    } 
   #goodslist .goods-item .info .sell{
       display: flex;
       justify-content: space-between;
       font-size: 13px;
   }  
</style>
