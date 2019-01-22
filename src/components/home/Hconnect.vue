<template>
    <div id="connect">
        <div class="top">
            <h2>{{msg}}</h2>
            <p class="content">H5Animator是一款简单，强大的H5动画制作工具</p>
            <p class="content">如果您在使用过程中遇到了任何困难，或者有好的意见和建议，请随时向我们反馈。</p>
            <p class="content contents"><span class="glyphicon glyphicon-phone-alt"></span> 电话: 023-12345678</p>
            <p class="content"><span class="glyphicon glyphicon-envelope"></span> 邮箱: 11222335@qq.com</p>
            
        </div>
        <div class="suggest">
            <p class="p1">意见反馈</p>
            <input type="text" ref="contact" placeholder="请留下您的联系方式">
            <textarea cols="20" ref="suggest" rows="6" placeholder="请写下您的意见或者建议"></textarea>
            <mt-button class="button pull-right"  @click="Submit()" type="primary" size="small" plain>发送</mt-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            msg:'联系我们'
        }
    },
    methods: {
      Submit(){
          if(this.$refs.contact.value == ''){
               Toast({
                    message: '联系方式不能为空',
                    position: 'middle',
                    duration: 2000
                });
          }
          else if(this.$refs.suggest.value == ''){
              Toast({
                    message: '建议不能为空',
                    position: 'middle',
                    duration: 2000
                });
          }
          else{
              Toast({
                message: '发送成功',
                position: 'middle',
                duration: 2000
            });
            this.$refs.suggest.value = '';
            this.$refs.contact.value = '';
          }     
      }
   }
}
</script>
<style scoped>
#connect{
    margin: 0px;
    padding: 0px;
}
#connect .top{
    height: 230px;
    background-color: rgba(255, 0, 0, 0.55); /* #ff00008c */
    padding-top: 30px;
    text-align: center;
}
#connect .top h2{
    font-weight: normal;
    color: white; 
    /* color: #777; */
    margin: 0px;
    padding-bottom: 15px;
    font-size: 25px;
}
#connect .top p.content{ 
    color: white;
    /* color: #777; */
    font-size: 14px;
    line-height: 25px;
    margin: 0;
}
#connect .top p.contents{
    padding-top: 10px;
}

#connect .suggest{
    margin: 10px 25px;
    border: 1px solid #eee;
    padding: 10px;
    height: 290px;
}
#connect .suggest .p1{
    color: #777;
    font-size: 16px
}
#connect .suggest input{
    font-size: 14px;
    height: 35px;
}
#connect .suggest textarea{
    font-size: 14px;
    margin-bottom: 5px;
}
#connect .suggest .button{
    height: 30px;
    padding: 0px 16px;
}
  
</style>
