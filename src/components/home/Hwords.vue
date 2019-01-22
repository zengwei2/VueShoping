<template>
  <div id="words">
      <div class="suggest">
          <p class="p1">留言反馈</p>
          <input type="text" ref="contact" placeholder="请留下您的联系方式">
          <textarea cols="20" ref="suggest" rows="6" placeholder="请写下您的意见或者建议"></textarea>
          <mt-button class="button pull-right" @click="Submit()" type="primary" size="small" plain>提交</mt-button>
      </div>
      <div class="content">
        <p>常见问题:</p>
        <p>1、重新做联系主题，是否可以更新积分?</p>
        <p class="answer">A: 可以，积分取当前最高分</p>
        <p>2、重新做联系主题，是否可以更新积分?</p>
        <p class="answer">B: 可以，积分取当前最高分</p>
        <p>3、重新做联系主题，是否可以更新积分?</p>
        <p class="answer">C: 可以，积分取当前最高分</p>
        <p>4、重新做联系主题，是否可以更新积分?</p>
        <p class="answer">D: 可以，积分取当前最高分</p>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      msg:'留言反馈'
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
#words{
    margin: 0px;
    padding: 0px;
}
#words .suggest{
    margin: 10px 25px;
    border: 1px solid #eee;
    padding: 10px;
    height: 290px;
}
#words .suggest .p1{
    color: #777;
    font-size: 16px
}
#words .suggest input{
    font-size: 14px;
    height: 35px;
}
#words .suggest textarea{
    font-size: 14px;
    margin-bottom: 5px;
}
#words .suggest .button{
    height: 30px;
    padding: 0px 16px;
}
#words .content{
  margin: 10px 25px;
}
#words .content .answer{
  font-size: 12px;
  text-indent: 1em;
}
</style>
