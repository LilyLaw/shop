<template>
	<div class="wrapFull">
		<L_Header></L_Header>
		<LeftMenu></LeftMenu>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	import L_Header from "./components/L_Header.vue";
	import LeftMenu from "./components/LeftMenu.vue";
	
	export default {
		name: 'app',
		
		components:{
			L_Header,LeftMenu
		}
	}
	
</script>

<style lang="less" scoped>
	.content{
		width: calc(100% - 10rem);
		position: fixed;
		right: 0;
		top: 5rem;
		padding: 1rem;
		box-sizing: border-box;
	}
</style>
