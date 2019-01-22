<template>
    <div id="UserReg">
        <h1>{{msg}}</h1>
        <form class="form-horizontal">
            <div class="form-group">
                <span class="span glyphicon glyphicon-user"></span>
                <input class="form-control" ref="username" type="text" id="username" placeholder="请输入用户名"> 
            </div> 
            <div class="form-group">
                <span class="span lyphicon glyphicon-envelope"></span>
                <input class="form-control" pattern="\w+(?:\.\w+)*@\w+(?:\.\w+)+" type="email" id="passwords" ref="email" placeholder="请输入邮箱" >							  
            </div>
            <div class="form-group">
                <span class="span glyphicon glyphicon-print"></span>
                <input class="form-control" v-model="pwd" required type="password"  @change="comparePwd" id="passwords" ref="password" pattern="[\x00-\xff]{6,}" placeholder="请输入密码" >							  
            </div>
            <div class="form-group">
                <span class="span glyphicon glyphicon-print"></span>
                <input class="form-control" v-model="repwd" required @change="comparePwd" type="password" id="passwords" ref="passwords" pattern="[\x00-\xff]{6,}" placeholder="请重新输入密码" >							  
            </div>
        </form>	
        <mt-button size="large" type="primary" plain @click="IsTrue()">注册</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data () {
        return {
            msg:'账号注册',
            pwd:'', //输入密码
            repwd:'' //确认密码
        }
    },
    methods: {
        //比较两次密码是否一致
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
        //点击注册验证
        IsTrue(){
            if(this.$refs.email.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
                var userlist = {
                    username: this.$refs.username.value,
                    email: this.$refs.email.value,
                    password: this.$refs.password.value
                }
                this.$store.commit('addUserlist',userlist)
                this.$router.go(-1)
                Toast({
                    message: '注册成功',
                    position: 'middle',
                    duration: 2000
                });
            }
            else{
                Toast({
                    message: '邮箱格式不正确',
                    position: 'middle',
                    duration: 2000
                });
            }
        }
    }
}
</script>
<style scoped>
  #UserReg{
      text-align: center;
      
      color: #00daff9c;
  }
  #UserReg h1{
      margin: 20px 0px;
      font-size: 25px;
      margin-top: 60px;
  }
  .form-group{
     height: 55px;
    line-height: 55px;
    margin-bottom: 0px
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
      width: 230px;
      height: 33px;
  }
  .mint-button--large {
    width: 71%;
    margin-top: 20px;
    margin-left: 60px;
  }
</style>
