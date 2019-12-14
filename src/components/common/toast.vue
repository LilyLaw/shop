<template>
	<div class="llltoast"><i class="icon iconfont iconcaution"></i><span>sldfjsldflsklsdlkdfslkdfksdjf</span></div>
</template>

<script>
	export default{
		name: 'Toast'
	}
</script>

<style scoped lang="less">
	@import './commonVariable.less';
	
	.llltoast{
		padding: 0.5rem 1rem;
		position: fixed;
		background: #fff;
		box-shadow: 0 0 10px @lllred;
		border-radius: @borderradius;
		top: 2rem;
		left: 20rem;
		opacity: 0;
		transition: all .3s linear;
		&.active{
			top: 3rem;
			opacity: 1;
		}
		i{
			font-size: 1.25rem;
		}
	}
</style>
