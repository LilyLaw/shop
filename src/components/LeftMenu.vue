<template>
	<nav class="leftMenu">
		<div class="logo">
			<img src="../assets/logo.png" alt="">
			<span>jack Lee</span>
			<span>退出</span>
		</div>
		<ul>
			<li v-for="(tpm,index) in menuArr" v-bind:key='index'>
				<router-link :to='tpm.url'>{{tpm.title}}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: 'LeftMenu',
		data: function(){
			return {
				menuArr:[{
					title: '产品列表',
					url: '/productlist'
				},{
					title: '订单列表',
					url: '/orderlist'
				},
				]
			}
		},
	}
</script>

<style lang="less" scoped>
	@import  './common/common.less';
	
	.leftMenu{
		background: @bgcolor;
		width: @leftMenuWidth;
		position: fixed;
		height: 100%;
		
		.logo{
			width: 100%;
			height: 10rem;
			display: flex;
			justify-content: center;
			flex-direction: column;
			
			img{
				width: 50%;
				height: auto;
				margin: auto;
			}
			span{
				text-align: center;
			}
		}
		ul{
			li{
				display: flex;
				height: 2rem;
				align-items: center;
				a{
					color: #fff;
					width: 100%;
					text-align: center;
				}
			}
		}
	}
	
</style>
