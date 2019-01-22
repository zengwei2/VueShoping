<template>

    <div id="reset">
        <h1>{{msg}}</h1>
         <form class="form-horizontal">
             <div class="form-group">
                <span class="span glyphicon glyphicon-earphone"></span>
                <!-- <input class="form-control" ref="username" type="number" id="username" placeholder="请输入手机号">
                  -->
                <input class="form-control" ref="phone" name="phone" type="number" placeholder="手机号" v-model="phone"/>
               <button type="button" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</button>
            </div> 
            <div class="form-group">
                <span class="span glyphicon glyphicon-print"></span>
                <input class="form-control" v-model="pwd" required type="password"  @change="comparePwd" id="password" ref="password" pattern="[\x00-\xff]{6,}" placeholder="请输入密码" >							  
            </div>
            <div class="form-group">
                <span class="span glyphicon glyphicon-print"></span>
                <input class="form-control" v-model="repwd" required @change="comparePwd" type="password" id="passwords" ref="passwords" pattern="[\x00-\xff]{6,}" placeholder="请再次输入密码" >							  
            </div>
         </form> 
         <mt-button class="button" type="primary" @click="IsTrue()" size="large" plain>提交</mt-button>   
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            msg:'密码重置',
            pwd:'', //输入密码
            repwd:'', //确认密码
            disabled:false,
            time:0,
            btntxt:"获取验证码",
            phone:this.phone //手机号码
        }
    },
    methods: {
        //比较两次密码是否一致
        //验证手机号码部分
        sendcode(){
            var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
            if(this.phone==''){
                alert("请输入手机号码");
            }else if(!reg.test(this.phone)){
                // 手机号格式不正确时
                Toast({
                    message: '手机号码格式不正确',
                    position: 'middle',
                    duration: 2000
                });
            }else{
                this.time=60;
                this.disabled=true;
                this.timer();
                /*axios.post(url).then(
                    res=>{
                    this.phonedata=res.data;
                })*/
            }
        },
        //验证时间倒计时
        timer() {
            if (this.time > 0) {
                    this.time--;
                    this.btntxt=this.time+"s后重新获取";
                    setTimeout(this.timer, 1000);
            } else{
                    this.time=0;
                    this.btntxt="获取验证码";
                    this.disabled=false;
            }
        },
        comparePwd(){
            if(this.repwd&&this.pwd){
                if(this.pwd===this.repwd){
                    // this.$refs.pwd.setMessage("");
                    return true
                }
                else
                {
                    // this.$refs.pwd.setMessage("两次密码不一致！");
                    Toast({
                        message: '两次密码不正确',
                        position: 'middle',
                        duration: 2000
                    });
                }
            }
        },
        //点击提交
        IsTrue(){
            var userlist = {
                    phone: this.$refs.phone.value,
                    password: this.$refs.password.value
                }
                this.$store.commit('addUserlist',userlist)
                this.$router.go(-1)
                Toast({
                    message: '修改密码成功',
                    position: 'middle',
                    duration: 2000
                });
        }
    }
   
}
</script>
<style scoped>
  #reset{
     
      color: #00daff9c;
  }
  #reset h1{
      margin: 20px 0px;
      font-size: 25px;
      margin-top: 60px;
      text-align: center;
  }
  .form-group{
     height: 55px;
     line-height: 55px;
     margin-bottom: 0px;
     padding-left: 40px;
  }
  .form-horizontal .span{
      display: inline-block;
      width:30px;
      top:7px;
      font-weight: normal;
      font-size: 20px;
  }
  span.lyphicon.glyphicon-envelope {
    position: relative;
    top: 3px;
    font-size: 26px;
  }
  .form-horizontal .form-control{
      display: inline;
      width: 217px;
      height: 33px;
  }
  button.btns {
    margin-top: 12px;
    font-size: 11px;
    width: 75px;
    padding-left: 7px;
  }
  .mint-button--large {
    width: 71%;
    margin-top: 20px;
    margin-left: 60px;
  }
  .button{
    height: 30px;
    padding: 0px 16px;
    margin: 20px 40px;
 }
</style>
