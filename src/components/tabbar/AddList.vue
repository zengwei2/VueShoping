<template>
  <div class="addlist">
     <div class="goods-list">
       <!-- 商品列表项区域 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="(item,i) in addListData">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
            
            <img :src="item.imgSrc" alt="">
            <div class="info">
              <h1>{{item.title}}</h1>
              
               <p>
                  <span class="price">￥{{item.price}}</span>
                  
                  <span class="mui-numbox"> 
                      <button class="mui-btn mui-btn-numbox-minus" type="button" @click="DecreaseNumber(item.id)">-</button>
                      <input class="mui-input-numbox" type="number"  ref="numbers" :value="$store.getters.getGoodsCount[item.id]" />
                      <button class="mui-btn mui-btn-numbox-plus" type="button" @click="AddNumber(item.id)">+</button>
                  </span>
                   <!--  @click="DecreaseNumber(item.id)" :value="$store.getters.getGoodsCount[item.id]"  @click="AddNumber(item.id)"  -->
                  <!-- 问题：如何从购物车中获取商品的数量呢 -->
                    <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，
                    count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                    <!-- 得到商品初始化的数量:$store.getters.getGoodsCount[item.id] -->
                    <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                </p>
            </div>
            
					</div>
				</div>
         
		  	</div>
			</div>
       <!-- 结算区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						 <div class="left">
               <p>总计</p>
               <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件 
                 总价 <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>
               </p>
               </div>
                 <mt-button type="danger" class="s">去结算</mt-button>        
             </div>
					</div>
				</div>
       <p>{{$store.getters.getGoodsSelected}}</p>       
  </div>
 
</template>

<script>

export default {
  name: 'addlist',
  data () {
    return {
      msg:'addlist',
      number:1,
      id:0,
      addListData:[],
      isSelecteds:true,
     
    }
  },
 
  created () {
    this.$store.getters.getCar.forEach((item,key)=>{
         this.getAddList(item.id)
         this.id = item.id
         console.log(item.id)      
     }) 
  },

  methods: {
    getAddList(id){
      var api = '/static/data/goods.json'

      this.$http.get(api).then((res)=>{
        this.addListData.push(res.data.message4[id-1])
        console.log(res.data.message4[id-1])
        console.log(this.addListData)
      }).catch((err)=>{
        console.log(err)
      })
    },
    DecreaseNumber(id){  
          if(this.number>0){
            this.number-=1  
          }
          else{
              this.number = 0
          } 
          this.$store.commit('updateGoodsInfo',{
        id,
        count:this.number
      })
       console.log('$refs.value:----'+this.$refs.numbers.value);
    },
    AddNumber(id){
      
      this.number++; 
       this.$store.commit('updateGoodsInfo',{
        id,
        count:this.number
      })
      console.log('$refs.value:----'+this.$refs.numbers.value);   
    },
    selectedChanged(id,val){
      console.log(id+'---'+val);
      this.$store.commit('updateGoodsSelected',{id,selected:val})
    },
    //点击删除，把商品从store中根据传递的id删除，再在组件中根据i删除
    remove(id,index){
      this.addListData.splice(index,1)
      this.$store.commit('removeFromCar',id)
    }
   
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addlist{
    background-color: #eee;
    overflow: hidden;
  }
  .addlist .mui-card-content-inner{
    display: flex;
    align-items: center;
  }
  .addlist .mui-card-content-inner img{
    width: 60px;
  }
  .addlist .mui-card-content-inner .info{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 10px
  }
   .addlist .mui-card-content-inner .info h1{
    font-size: 13px;
    text-align: center;
    color: #555;
    line-height: 18px;
  }
  .addlist .mui-card-content-inner .info .price{
    color: red;
    font-weight: bold;
  }
  .addlist .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .addlist .jiesuan .red{
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
</style>
