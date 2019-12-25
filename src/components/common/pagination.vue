<template>
	<div class="lll-pagination">
		<ul>
			<li class="left" @click="toPrevPage">
				<i class="icon iconfont iconleft"></i>
			</li>
			<li v-for="(item,i) in renderType" :key="i" :class='item==parseInt(currentpage)?"chose":""' @click="toOnePage(item)">{{item}}</li>
			<li class="right" @click="toNextPage">
				<i class="icon iconfont iconright"></i>
			</li>
		</ul>
		<div class="pageinput">
			<div class="jumppage">
				跳至<input type="text">页
			</div>
			<div>
				每页<input type="text">个
			</div>
		</div>
	</div>
</template>

<script>
	// 分页规则:
	// 1. 第一页和最后一页必须有
	// 2. 当前页数的前后必须各有两页,总共五页
	// 3. 剩余的用...代替
	
	export default{
		name: 'Pagination',
		props:['currentpage','allpage','pagesize'],
		computed:{
			renderType(){
				let tmpp = parseInt(this.allpage);
				let tmpc = parseInt(this.currentpage);
				if(this.allpage>6){
					if(tmpc-2<=0){	//直接渲染前5个
						return [1,2,3,4,5,'...',tmpp];
					}else if(tmpc+2>=0){ // 直接渲染后5个
						return [1,'...',tmpp-4,tmpp-3,tmpp-2,tmpp-1,tmpp];
					}else{ // 渲染中间的
						return [1,'...',tmpc-2,tmpc-1,tmpc,tmpc+1,tmpc+2,'...',tmpp];
					}
				}else{	// 全部渲染出来
					let arr = [];
					for(let i=0;i<tmpp;i++){ arr.push[i]; }
					return arr;
				}
			}
		},
		methods:{
			toPrevPage(){ this.$emit('toPrvePage'); },
			toNextPage(){ this.$emit('toNextPage'); },
			toOnePage(despage){ this.$emit('toOnePage',despage); }
		},
		mounted: function(){
			window.console.log(this.currentpage,this.allpage,this.pagesize);
		}
	}
</script>

<style lang="less" scoped>
	@import './common.less';
	@import './commonVariable.less';
	.lll-pagination{
		.allcenter;
		margin-top: 1rem;
		ul{
			display: flex;
			li{
				width: 1.6rem;
				height: 1.6rem;
				border: 1px solid @lllbordercolor;
				margin: 0.3rem;
				border-radius: @borderradius;
				.allcenter;
				font-size: 0.8rem;
				cursor: pointer;
				&:hover,&.chose{
					border-color: @lllblue;
					color: @lllblue;
				}
				
			}
		}
		.pageinput{
			display: flex;
			> div{
				margin: 0 0.5rem;
			}
			input{
				width: 3rem;
				text-align: center;
			}
		}
	}
</style>
