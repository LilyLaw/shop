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
		components:{
			LeftMenu
		}
	}
	
</script>

<style lang="less">
	@import './components/common/common.less';
	@import './components/common/commonVariable.less';
	@import './assets/iconfont/iconfont.css';

	.content{
		width: calc(100% - @leftMenuWidth);
		position: fixed;
		right: 0;
		padding: 1.5rem 2rem;
		box-sizing: border-box;
		height: 100vh;
		overflow-y: scroll;
	}
</style>