<template>
  <div class="set">
     <div class="header">   
	    	<h2><img src="../../assets/img/headimg.png" alt=""></h2>
	        <div class="user-box">
			
				<!-- 模态框 -->
				<!-- Button trigger modal -->
				<button v-if="isShowb" type="button" class="btn btn-link button1" data-toggle="modal" data-target="#myModal">
					登录
				</button>
				<span v-if="isShows" class="welcome">欢迎您! {{usernames}} <span class="glyphicon glyphicon-off" @click="CloseWelcome()"></span></span>
				<router-link v-if="isShowb" tag="button" to='/set/userreg' type="button" class="btn btn-link button1">
					注册
				</router-link>
				<!-- <router-link to='/set/userreg' tag="button">点击注册</router-link> -->
				<!-- Modal -->
				<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="myModalLabel">登录/注册</h4>
						</div>
						<div class="modal-body">
							<!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"> --></mt-field>
							<form class="form-horizontal">
								<div class="form-group">
									<label for="username" class="control-label" >用户名</label>	
									<input class="form-control" ref="username" type="text" id="username" placeholder="点击输入用户名"> 
								</div>
								<div class="form-group">
									<label for="passwords" class="control-label">密&nbsp;&nbsp;&nbsp;码</label>	
									<input class="form-control" type="password" id="passwords" ref="password" placeholder="点击输入密码" >							  
								</div>
							</form>	
							<mt-button type="primary"  plain class="mt-button" @click="Logins()" >登录</mt-button>
							<P class="p">
								<a href="#" @click="ToReset()" class="a1" data-dismiss="modal">忘记密码?</a>
								<!-- <a href="#">点击注册</a> -->
							</P>
						</div>
						<!-- <div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
							<button type="button" class="btn btn-primary">Save changes</button>
						</div> -->
						</div>
					</div>
				</div>
	        </div>
	        <ul class="clear">
	        	<li class="leftli">
	            	<span>0</span>
	                <p>关注</p>
	            </li>
	            <li class="rightli">
	            	<span>0</span>
	                <p class="end">粉丝</p>
	            </li>
	        </ul>
	    </div>
       <div class="docList">
	    	<ul class="list-group">
	            <li class="list-group-item">
					<span class="span1 glyphicon glyphicon-menu-hamburger"></span>
					<span class="span2">设置</span>
					<span class="pull-right span3 glyphicon glyphicon-menu-right"></span>
					<!-- <span class="pull-right span4">0</span> -->
	            </li>
	            <li class="list-group-item">
					<span class="span1 glyphicon glyphicon-tent"></span>
					<span class="span2">意见反馈</span>
					<span class="pull-right span3 glyphicon glyphicon-menu-right"></span>
					<!-- <span class="pull-right span4">0</span> -->
	            </li>
	            <li class="list-group-item">
					<span class="span1 glyphicon glyphicon-apple"></span>
					<span class="span2">收藏夹</span>
					<span class="pull-right span3 glyphicon glyphicon-menu-right"></span>
					<!-- <span class="pull-right span4">0</span> -->
	            </li>
	            <li class="list-group-item">
					<span class="span1 glyphicon glyphicon-tasks"></span>
					<span class="span2">使用帮助</span>
					<span class="pull-right span3 glyphicon glyphicon-menu-right"></span>
					<!-- <span class="pull-right span4">0</span> -->
	            </li>
	            <li class="list-group-item">
					<span class="span1 glyphicon glyphicon-tasks"></span>
					<span class="span2">关于</span>
					<span class="pull-right span3 glyphicon glyphicon-menu-right"></span>
	            </li>
	        </ul>
	    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'set',
  data () {
    return {
	  username:'',
	  isShows:false,  //登录后显示用户名
	  isShowb:true,   //未登录时的登录和注册
	  usernames:'', //登录成功的用户名
	  
    }
  },
  created () {
	 console.log('this.$store.getters.getUserName'+this.$store.getters.getUserName.username);
	 if(this.$store.getters.getUserName.username !=''){
		  this.isShows = true;
		  this.isShowb = false;
		  this.usernames = this.$store.getters.getUserName.username
	 }
	 else{
		  this.isShows = false;
		  this.isShowb = true;
	 }
	  
  },
  methods: {
	  Logins(){
		  //userlist里有2个及以上的账号密码时，会出现else错误
		  if(this.$refs.username.value == ''){
			  Toast({
                    message: '用户名不能为空',
                    position: 'bottom',
					duration: 2000					
                });
		  }
		  else if(this.$refs.password.value == ''){
			  Toast({
                    message: '密码不能为空',
                    position: 'bottom',
					duration: 2000
                });
		  }
		  else{
		  $('#myModal').modal('hide')
			this.isShows = !this.isShows;
			this.isShowb = !this.isShowb;
			this.usernames = this.$refs.username.value
			this.$refs.username.value = '';
			this.$refs.password.value = '';	  
		  }
			
	  },
	  CloseWelcome(){
		  this.isShows = !this.isShows;
		  this.isShowb = !this.isShowb;
	  },
	  //忘记密码 点击进入密码重置
	  ToReset(){
		  this.$router.push('/set/resetpassword');
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .set .header{
	 background-color: #999;
	 padding-top: 20px;
	 text-align: center;
	 height: 200px;
	 
	 color: white
 }
  .set .header h2{
	  margin: 0px
  }
  .set .header h2 img{
	  width: 63px;
	  height: 63px;
  }
  .set .header .user-box{
	  padding-top: 10px;
	  margin-bottom: 10px;
  }
  .set .header .welcome{
	  font-size: 14px;
  }
  /* 模态框 */
	.set .header .user-box .button1{
		color: white;
		border: 0px;
		margin: 0px 5px;
		text-decoration: none;
		font-size: 15px;
	}
	.modal-dialog {
			margin-top: 130px;
			color: #999
		}
		.form-group{
			margin-left: -21px;
		}
		.control-label{
			
			width:50px;
			font-weight: normal;
			font-size: 16px;
			display: inline;
		}
		.form-control{																																
			width: 200px;
			display: inline;
		}
	.mt-button{
		height: 32px;
		line-height: 30px;
		font-weight: normal;
		font-size: 16px;
		width: 80%;
	}	
	.p{
		text-align: left;
		padding-left: 36px;
		margin-top: 15px;
	}
	.p a{
		text-decoration: none;
	}
	.p a.a1{
		margin-right: 10px
	}
	.set .header .clear{
		padding: 0px
	}
	.set .header .clear li.leftli{
		list-style-type: none;
		width: 50%;
		float: left;
		margin-top: 17px		
	}
	.set .header .clear li.rightli{
		list-style-type: none;
		width: 50%;
		float: right;
		margin-top: 17px		
	}
	.set .header .clear li span{
		height: 16px;
		line-height: 16px;
		text-align: center;
	}
	.set .header .clear li p{
		color: white;
		text-align: center;
		height: 18px;
		line-height: 22px;
		border-right: 2px solid #fff	
	}
	.set .header .clear li p.end{
		border:0;
	}

	.set .docList{
		clear: both;
	}
	.set .docList li{
		height: 43px;
		line-height: 21px;
		padding-left: 20px;
        padding-right: 20px;
		color: #555;
	}
	.set .docList li .span1{
		margin-right: 5px;
		color: #47d6bd;
		top: 3px;
	}
	.set .docList li .span2{
		font-size: 15px;
	}
	.set .docList li .span3{
		color: #ccc;
		margin-left: 12px;
		font-size: 20px;
		height: 21px;
		line-height: 19px;
	}
	/* .set .docList li .span4{
		color: red;
        font-weight: bold;
	} */
	
</style>
