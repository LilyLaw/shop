<template>
	<div class="lll-toolbar">
		<div class="delete">
			<Btndanger incon="删除" />
		</div>
		<div class="search">
			<input type="text" class="inputtext">
			<span @click="search">
				<i class="icon iconfont iconsearch" ref="searchshowbtn"></i>
			</span>
		</div>
	</div>
</template>

<script>
	import Btndanger from './btn-danger.vue';
	
	export default {
		methods:{
			search: function(){
				let tpm = this.$refs.searchshowbtn.className;
				this.$refs.searchshowbtn.className = tpm.replace('iconsearch','iconbanyuan');
			}
		},
		components:{
			Btndanger
		}
	}
</script>

<style scoped lang="less">
	@import './commonVariable.less';
	@import './common.less';
	.lll-toolbar{
		min-height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1rem 0;
		.search{
			display: flex;
			input{
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			span{
				background: @lllblue;
				width: 2.5rem;
				height: 1.875rem;
				border-top-right-radius: @borderradius;
				border-bottom-right-radius: @borderradius;
				i{
					color: #fff;
					font-size: 1.25rem;
				}
				.iconbanyuan{
					font-size: 0.8rem;
					transform-origin: 60% 0;
					animation: spin 1.5s infinite linear;
					margin-top: 0.8rem;
					margin-right: 0.25rem;
				}				
				.allcenter;
			}
		}
	}
</style>
