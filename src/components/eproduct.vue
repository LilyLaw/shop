<template>
	<div>
		<PageTitle :pagetitle='pageTitle'></PageTitle>
		<form :action="getReqUrl" method="post" class="lll-eproduct-form">
			<ul>
				<li>
					<label for="">名称：</label>
					<input type="text" name="pname" required="required" :value="productData.product_name">
				</li>
				<li>
					<label for="">价格：</label>
					<input type="text" name="pprice" required="required" :value="productData.product_price">
				</li>
				<li class="lll-e-f-radio">
					<label for="">状态：</label>
					<span>
						<input type="radio" name='status' value="1" :checked="productstatus"> 上架
					</span>
					<span>
						<!-- <i class="icon iconfont iconradio1"></i> -->
						<input type="radio" name='status' value="0" :checked="!productstatus"> 下架
					</span>
				</li>
				<li>
					<label for="">详情：</label>
					<!-- <input type="text" name="pdes" :value="productData.product_description"> -->
					<froala :tag="'textarea'" :config="config" v-model="model"></froala>
				</li>
				<li>
					<input type="text" name="pid" hidden="hidden" :value="productData._id">
					<input type="submit">
				</li>
			</ul>
		</form>
	</div>
	
</template>

<script>
	import basicConfig from '../basicconfig.js';
	import axios from 'axios';
	import PageTitle from './common/pagetitle.vue';

	export default {
		name: 'Eproduct',
		data: function(){
			return {
				pageTitle:'',
				productData: {
					id:0,
					product_description:'',
					product_name:'',
					product_price:'',
					product_status:''
				},
				config: {
					events: {
						'froalaEditor.initialized': function () {
							window.console.log('initialized')
						}
					}
				},
				model: 'Edit Your Content Here!'
			}
		},
		computed: {	// 计算属性
			getReqUrl:function(){
				return basicConfig.apihost+'addproduct';
			},
			productstatus: function(){
				return this.productData.product_status === 1;
			}
		},
		created:function(){
			if(this.$route.params.id){
				this.pageTitle = '修改产品';
				let pid = this.$route.params.id;
				axios.get(`${basicConfig.apihost}product/${pid}`)
					.then((res)=>{
						this.productData = res.data[0];
					})
					.catch((err)=>{
						throw err;
					});
			}else{
				this.pageTitle = '新增产品';
			}
		},
		components:{
			PageTitle//,VueFroala
		}
	}
</script>

<style scoped lang="less">
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
					min-width: 6.25rem;
					max-width: 12.5rem;
					text-align: right;
				}
				input{
					width: 70%;
					min-width: 25rem;
					max-width: 37.5rem;
				}
			}
			li.lll-e-f-radio{
				input{
					width: 20px;
					min-width: unset;
					max-width: unset;
				}
			}
		}
	}
</style>
