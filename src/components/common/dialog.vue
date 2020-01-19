<template>
	<div class="llldialog">
		<div class="llldialogcon">
			<div class="head">
				<span>title</span>
				<i class="icon iconfont iconshanchu2"></i>
			</div>
			<div class="con">
				确定要删除吗？
			</div>
			<div class="foot">
				<Btn incon="取消" type="cancel"/>
				<Btn incon="删除" type="danger"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Btn from './btn.vue';
	
	export default {
		name: 'Dialog',
		components:{ Btn }
	}
</script>

<style scoped lang="less">
	@import './common.less';
	@import './commonVariable.less';
	.llldialog{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		top: 0;
		left: 0;
		.allcenter;
		.llldialogcon{
			> *{
				padding: 1rem;
			}
			width: 20rem;
			border-radius: @borderradius;
			background: @bgcolor;
			.head{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid @lllbordercolor;
			}
			.con{
				min-height: 4rem;
			}
			.foot{
				border-top: 1px solid @lllbordercolor;
				text-align: right;
			}
		}
	}
</style>
