<template>
	<div class="wrapFull">
		<LeftMenu></LeftMenu>
		<transition><router-view class="content"></router-view></transition>
	</div>
</template>

<script>
	import LeftMenu from "./components/LeftMenu.vue";
	
	export default {
		name: 'app',
		components:{ LeftMenu },
		beforeCreate:function(){
			// 检查是否登录
			if(!localStorage.getItem('username')){
				this.$router.push({path:'/login'});// 跳转到登录
			}
		}
	}
	
</script>

<style lang="less">
	@import './components/common/common.less';
	@import './components/common/commonVariable.less';
	@import './assets/iconfont/iconfont.css';

	.content{
		padding: 1.5rem 2rem;
		width: calc(100% - @leftMenuWidth);
		height: 100vh;
		position: fixed;
		right: 0;
		box-sizing: border-box;
		overflow-y: scroll;
	}
</style>