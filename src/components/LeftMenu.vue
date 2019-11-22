<template>
	<nav class="leftMenu">
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
		width: 10rem;
		position: fixed;
		height: 100%;
	}
	ul{
		li{
			a{
				color: #fff;
			}
		}
	}
</style>
