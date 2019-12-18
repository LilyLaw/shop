<template>
	<div>
		<PageTitle :pagetitle='pageTitle'></PageTitle>
		<div class="lll-eproduct-form">
			<ul>
				<li>
					<label for="">名称：</label>
					<input type="text" v-model="productData.product_name">
				</li>
				<li>
					<label for="">价格：</label>
					<input type="number" v-model="productData.product_price">
				</li>
				<li class="lll-e-f-radio">
					<label for="">状态：</label>
					<span>
						<input type="radio" value="1" v-model="productData.product_status"> 上架
					</span>
					<span>
						<!-- <i class="icon iconfont iconradio1"></i> -->
						<input type="radio" value="0" v-model="productData.product_status"> 下架
					</span>
				</li>
				<li class="lll-e-f-desc">
					<label for="">详情：</label>
					<froala :tag="'textarea'" :config="config" v-model="productData.product_description"></froala>
				</li>
				<li>
					<label for=""></label>
					<input type="text" hidden="hidden" v-model="productData._id">
					<input type="submit" @click="submitData">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import basicConfig from '../basicconfig.js';
	import axios from 'axios';
	import PageTitle from './common/pagetitle.vue';
	import qs from 'querystring';

	export default {
		name: 'Eproduct',
		data: function(){
			return {
				pageTitle:'',
				productData: {
					_id:0,
					product_description:'',
					product_name:'',
					product_price:'',
					product_status:1
				},
				config: {
					placeholderText: 'Edit Your Product Description Here!',
					events: {
						// 'initialized': function () {
						// 	window.console.log(this.html.get());
						// }
					}
				}
			}
		},
		computed: {
			getReqUrl:function(){
				return basicConfig.apihost+'addproduct';
			}
		},
		methods:{
			submitData(){
				//1. 先检测必填项
				this.checkValue();
				//2. 再调接口
				axios({
					method:'post',
					url: this.getReqUrl,
					data: qs.stringify(this.productData)
				}).then(function(res){
					window.console.log(res);
				}).catch(function(err){
					throw err;
				});
			},
			checkValue(){
				this.productData.product_name = this.productData.product_name.trim();
			}
		},
		created:function(){
			if(this.$route.params.id){
				this.pageTitle = '修改产品';
				let pid = this.$route.params.id;
				axios.get(`${basicConfig.apihost}product/${pid}`)
					.then((res)=>{
						this.productData = res.data[0];
					}).catch((err)=>{ throw err; });
			}else{
				this.pageTitle = '新增产品';
			}
		},
		components:{
			PageTitle
		}
	}
</script>

<style scoped lang="less">
	@import './common/commonVariable.less';
	.lll-eproduct-form{
		margin-top: 2rem;
		padding: 1rem;
		border: 1px solid #f0f0f0;
		min-width: 37.5rem;
		ul{
			li{
				display: flex;
				align-items: center;
				padding: 0.7rem 0;
				label{
					width: 30%;
					min-width: 5rem;
					max-width: 8rem;
					text-align: right;
				}
				input[type='text'],input[type='number']{
					width: 70%;
					min-width: 25rem;
					max-width: 37.5rem;
				}
				input[type='submit']{
					min-width: 5rem;
					height: 2.5rem;
					border: none;
					background: @lllblue;
					color: @fontcolorwhite;
					border-radius: @borderradius;
					cursor: pointer;
					letter-spacing: 0.1rem;
					&:hover{
						opacity: 0.8;
					}
				}
			}
			li.lll-e-f-radio{
				input{
					width: 20px;
				}
			}
			li.lll-e-f-desc{
				label{
					align-self: flex-start;
				}
			}
		}
	}
</style>
