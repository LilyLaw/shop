<template>
	<nav class="leftMenu">
		<div class="logo">
			<img src="../assets/logo.webp" alt="">
			<span>jack Lee</span>
			<span>退出</span>
		</div>
		<div class="smenu">
			<router-link :to='tpm.url' tag="a" v-for="(tpm,index) in menuArr" v-bind:key='index'>
				<span :class="tpm.icon" class="iconfont "></span>
				{{tpm.title}}
			</router-link>
		</div>
	</nav>
</template>

<script>
	export default{
		name: 'LeftMenu',
		data: function(){
			return {
				menuArr:[{
					title: '产品列表',
					url: '/productlist',
					icon: 'iconchanpin1'
				},{
					title: '订单列表',
					url: '/orderlist',
					icon: 'icondingdandaifukuan'
				}]
			}
		},
	}
</script>

<style lang="less" scoped>
	@import  './common/common.less';
	@import  './common/commonVariable.less';
	
	.leftMenu{
		background: @bgcolor;
		width: @leftMenuWidth;
		position: fixed;
		height: 100%;
		
		.logo{
			width: 100%;
			height: 10rem;
			.allcenter;
			flex-direction: column;
			margin-top: 2rem;
			img{
				width: 50%;
				height: auto;
				margin: auto;
				border-radius: 50%;
			}
			span{
				text-align: center;
			}
		}
		.smenu{
			display: flex;
			flex-direction: column;
			margin-top: 2rem;
			a{
				.allcenter;
				height: 3rem;
				color: #888;
				.transall;
				&.router-link-active{
					background: #fafafa;
					color: #444;
					.transall;
				}
				
				&:hover{
					background: #fafafa;
					color: #444;
					.transall;
				}
			}
		}
	}
	
</style>
