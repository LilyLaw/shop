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
				跳至<input type="text" @change='changpage'>页
			</div>
			<div>
				每页<input type="text" @change='changepagesize'>个
			</div>
		</div>
	</div>
</template>

<script>	
	export default{
		name: 'Pagination',
		props: {
			currentpage: Number,
			allpage: Number,
			pagesize: Number,
		},
		computed:{
			renderType(){
				if(this.allpage>6){
					if(this.currentpage-2<=0){	//直接渲染前5个
						return [1,2,3,4,5,'...',this.allpage];
					}else if(this.currentpage+2>=0){ // 直接渲染后5个
						return [1,'...',this.allpage-4,this.allpage-3,this.allpage-2,this.allpage-1,this.allpage];
					}else{ // 渲染中间的
						return [1,'...',this.currentpage-2,this.currentpage-1,this.currentpage,this.currentpage+1,this.currentpage+2,'...',this.allpage];
					}
				}else{	// 全部渲染出来
					let arr = [];
					for(let i=0;i<this.allpage;i++){ arr.push(i+1); }
					return arr;
				}
			}
		},
		methods:{
			toPrevPage(){ this.$emit('toPrvePage'); },
			toNextPage(){ this.$emit('toNextPage'); },
			toOnePage(despage){ this.$emit('toOnePage',despage); },
			changpage(e){
				let newpage = parseInt(e.target.value);
				if(newpage !== this.currentpage && newpage < this.pagesize){ this.$emit('changepage',newpage); }
			},
			changepagesize(e){
				let newpagesize = parseInt(e.target.value);
				if(newpagesize !== this.pagesize){ this.$emit('changepagesize',newpagesize); }
			}
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
