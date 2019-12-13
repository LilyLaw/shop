<template>
	<span class="lll-btn danger">{{incon}}</span>
</template>

<script>
	export default{
		props:['toUrl','incon']
	}
</script>

<style scoped lang="less">
	@import './commonVariable.less';
	.danger{
		color: @lllred;
    background: #fff2e8;
    border:1px solid @lllred;
	}
</style>
