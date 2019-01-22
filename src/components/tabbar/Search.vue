<template>
  <div id="search">
    <div class="Tsearch">
      <!--  <mt-search v-model="value" :result="filterResult" @keyup="getValue($event)" autofocus >搜索啊</mt-search> -->
         <input type="text" class="text" v-model="value" @keyup="getValue($event)"  @keydown.down="changeBg()" @keydown.38="changUp()">
          <button type="button" @click="CloseValue()" class="close" v-show="closes" aria-label="Close"><span aria-hidden="true">&times;</span></button>
         <button class="btn btn-primary bsearch" @click="ToSearch()">搜索</button>
    </div>
　　 <ul>
      <li v-for="(item,key) in list" @click="getInputValue(item.word)" :class="{bg:key == now}">
        <!-- {{key}} --> {{item.word}}
      </li>
    </ul>
    <p v-show="list.length == 0">暂无数据....</p>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      closes:false, //显示关闭按钮
      value:'',
      list:[],
      now: -1,   
    }
  },

  methods:{
      getValue(e){
        this.closes = true;
        if(e.keyCode == 38 || e.keyCode == 40) return;
        if(e.keyCode == 13){
          window.open('https://www.baidu.com/s?wd='+this.value)
          this.value = '';  
          this.list = '';
        }
        var api = 'https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&fields=word';
        //axios不支持jsonp，vue-source支持jsonp
        this.$http.jsonp(api,{
           params:{word:this.value},
           jsonpCallback:'jQuery110206035145291355748_1544581992933'
          }).then((res)=>{
            console.log(res.body.result);
            this.list = res.body.result;
         },(err) => {
            console.log('err'+err);
         })
        if(this.value == ''){
          this.list = ''
         }
      },
      //键盘按下键时触发
      changeBg(){
          this.now++;
          console.log(this.now);
          if(this.now == this.list.length)
            this.now = -1;
            this.value = this.list[this.now].word;
        },
       //键盘按上键时触发 
      changUp(){
          this.now--;
          if(this.now == -2){
            this.now = this.list.length - 1;
          }
          this.value = this.list[this.now].word;
      },
      //手机点击li的内容时传递给input框
      getInputValue(word){
          this.value = word;
      },
      //点击关闭按钮清空值
      CloseValue(){
        this.value = '';  //清空input框的值
        this.list = '';   //清空list数组的值
      },
      //点击搜索按钮
      ToSearch(){
         window.open('https://www.baidu.com/s?wd='+this.value)
         this.value = '';  
         this.list = '';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .Tsearch{
      background-color: #eee;
      height: 55px;
      padding: 10px;
   }
   .Tsearch .text{
     width:83%;
     height: 35px;
   }
   .Tsearch .close{
      position: absolute;
      top: 57px;
      right: 83px;
   }
   .Tsearch .bsearch{
      width: 54px;
      height: 31px;
      line-height: 19px;
      text-align: center;
      background-color: #c8c7cc;
      border: 0px;
   }
   .bg{
     background:gray;
   }
   ul{
      padding: 5px;
      padding-left: 13px;
   }
   li{
     list-style-type: none;
     line-height: 23px;
     font-size: 14px;
   }
   p{
     padding-left: 13px;
   }
</style>
