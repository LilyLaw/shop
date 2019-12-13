<template>
	<router-link :to='toUrl' class="lll-btn basic">{{incon}}</router-link>
</template>

<script>
	export default{
		props:['toUrl','incon']
	}
</script>

<style scoped lang="less">
	@import  './commonVariable.less';
	.basic{
		color: @lllblue;
		background: #f0f5ff;
		border: 1px solid @lllblue;
	}
</style>
