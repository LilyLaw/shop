<template>
	<router-link v-if="toUrl" class="lll-btn" :to="toUrl" :class="type">{{this.incon}}</router-link>
	<span v-else class="lll-btn" :class="type" @click="clickme">{{this.incon}}</span>
</template>

<script>
	export default{
		name: 'Btn',
		props: ['toUrl','incon','type'],
		methods:{
			clickme(){
				this.$emit('deleteme');
			}
		}
	}
</script>

<style scoped lang="less">
	@import './commonVariable.less';
	
	.lll-btn{
		padding: 0.3rem 0.5rem;
		font-size: 12px;
		border-radius: 3px;
		cursor: pointer;
		margin: 0.2rem;
	}
	.basic{
		color: @lllblue;
		background: #f0f5ff;
		border: 1px solid @lllblue;
	}
	.danger{
		color: @lllred;
		background: #fff2e8;
		border:1px solid @lllred;
	}
	.cancel{
		color: @fontcolorblack;
		background: @lllcancel;
		border: 1px solid @lllblue;
	}
</style>
