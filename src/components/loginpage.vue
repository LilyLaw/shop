<template>
	<div class="loginpage">
		<div class="loginbox">
			<div class="single-line"><label for="">用户名:</label><input type="text" v-model="username"></div>
			<div class="single-line"><label for="">密码:</label><input type="text" v-model="password"></div>
			<div class="single-line"><label for=""></label><input type="submit" @click="toLogin"></div>
		</div>
	</div>
</template>

<script>
	import BasicConfig from '../basicconfig.js';
	import axios from 'axios';
	import qs from 'querystring';
	
	export default {
		data: function(){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			toLogin(){
				let that = this;
				axios.post(`${BasicConfig.apihost}login`,qs.stringify({ username: this.username, password: this.password }))
				.then((res)=>{
					if(res.data.status === 1){
						localStorage.setItem('username',that.username); // 设置localstorage
						this.$router.go(-1);// 跳回去原来的页面
					}else{ alert(res.data.msg); }
				}).catch((err)=>{ throw err; });
			}
		}
	}
</script>

<style scoped lang="less">
	@import './common/common.less';
	@import './common/commonVariable.less';
	
	.loginpage{
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.3);
		width: 100%;
		height: 100vh;
		.allcenter;
		> .loginbox{
			width: 20rem;
			background: #fff;
			padding: 1rem 0.5rem;
			box-sizing: border-box;
			.single-line{
				.allcenter;
				margin: 1rem 0;
				label{
					width: 4rem;
					text-align: right;
					padding: 0 0.5rem;
				}
				input[type="submit"]{
					height: 2rem;
					width: 4rem;
				}
			}
		}
	}
</style>
