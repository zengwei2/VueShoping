<template>
    <div id='goodsinfo'>
         <!-- 轮播图区域 -->
        <v-lunbotu :img-list="list" :isfull='false'></v-lunbotu>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       市场价: <span class="oldsprice">￥{{list2.OldPrice}}</span> &nbsp;&nbsp;销售价:<span class="now_price">￥{{list2.price}}</span>
                   </p>
                   <p>购买数量: 
                       <span class="mui-numbox"> 
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="DecreaseNumber()">-</button>
                            <input class="mui-input-numbox" type="number"  v-model="number" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="AddNumber()">+</button>
                        </span>
                      
                   </p>
                   <p>
                       <mt-button class="s" type="primary" size="small">立即购买</mt-button>
                       <mt-button class="s" type="danger" size="small" @click="addNum()">加入购物车</mt-button>
                   </p>
                </div>
            </div>
        </div>
       <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{list2.goods_no}}</p>
                    <p>库存情况:{{list2.num}}</p>
                    <p>上架时间:{{list2.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type='primary' size='large' plain @click="goDesc()">图文介绍</mt-button>
                <mt-button type='danger' size='large' plain @click="goComment()">图文介绍</mt-button>
            </div>
        </div>
        <!-- 小球 -->
        <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="hidden" ref="ball"></div>
        </transition>
        
    </div>
</template>
<script>
import lunbotu from "../Subcomponent/LunBotu.vue";

export default {
    data () {
        return {
            msg:'商品详情页面',
            /* title:'',
            OldPrice:0,
            price:0,
            num:0, */
            id:0,
            list:[],
            list2:"",
            number:1,  //选购的数量
            hidden:false   
        }
    },
  
    components: {
        'v-lunbotu':lunbotu
    },
    created () {
      this.getList();
      this.getGoods() 
     /* console.log(' this.$store.getters.getListValue'+this.$store.getters.getListValue);  */
     this.$store.getters.getListValue.forEach(item=>{
         this.id = item.id;
     })
    },
    
    methods: {
        
         getList(){
            var api = '/static/data/goods.json'
            this.$http.get(api).then((res)=>{
                res.data.message2.forEach(item=>{
                    item.img = item.imgSrc2
                })
                this.list = res.data.message2;
                this.list = res.data.message2;
               
            }).catch((err)=>{
                console.log(err)
            })
        },
        getGoods(){
            var api = '/static/data/goods.json'
             this.$http.get(api).then((res)=>{
                 
                this.list2 = res.data.message3[ this.id-1];
                console.log(res.data.message3[ this.id-1])
            }).catch((err)=>{
                console.log(err)
            })
        },
        AddNumber(){
            this.number++;   
        },
        DecreaseNumber(){
            if(this.number>0){
            this.number-=1
            }
            else{
                this.number = 0
            }
        },
        goDesc(){
            this.$router.push({name:'goodsdesc'})
        },
        goComment(){
            this.$router.push({name:'goodscomment'})
        },
        addNum(){
            this.hidden=!this.hidden;
            this.$store.state.count = this.number
            var goodsinfolist = {
                id:this.list2.id,
                number:this.number,
                price:this.list2.price,
                selected:true
            }
            this.$store.commit('addToCar',goodsinfolist)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePostion = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePostion.left - ballPosition.left;
            const yDist =  badgePostion.top - ballPosition.top;
            el.style.transform = `translate(${xDist}px , ${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"; 
            done();
        },
        afterEnter(el){
            this.hidden = !this.hidden;
        }
        
    }
}
</script>
<style scoped>
.goodsinfo{
    background-color: #eee;
    overflow: hidden;
}
.now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
.oldsprice{
    text-decoration: line-through;
}

.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin: 15px 0
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 306px;
    left:138px
}
</style>
