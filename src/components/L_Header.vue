<template>
	<header class="header">这里放头部</header>
</template>

<script>
	export default{
		name : 'L-Header'
	}
</script>

<style lang="less" scoped>
	@import  './common/common.less';
	header.header{
		width: calc(100% - 10rem);
		position: fixed;
		right: 0;
		height: 5rem;
		background: @bgcolor;
	}
</style>
