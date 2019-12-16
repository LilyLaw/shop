<template>
	<div>
		<PageTitle pagetitle='产品列表'></PageTitle>
		<Toolbar />
		<ListTable v-if="loadedTableData" :tabledata='tableData' ></ListTable>
		<Loading v-else>加载中</Loading>
		<Toast />
		<!-- <Dialog /> -->
	</div>
	
</template>

<script>
	import axios from 'axios';
	import basicConfig from '../basicconfig.js';
	import PageTitle from './common/pagetitle.vue';
	import Toolbar from './common/toolbar.vue';
	import ListTable from './common/listtable.vue';
	import Loading from './common/loading.vue';
	import Toast from './common/toast.vue';
	// import Dialog from './common/dialog.vue';
	
	export default {
		name: 'ProductList',
		data: function(){
			return {
				tableData:{
					thead:[],
					tbody:[]
				},
			}
		},
		computed:{
			loadedTableData: function(){
				return this.tableData.tbody.length>=1;
			}
		},
		created: function(){
			let that = this;
			axios.get(`${basicConfig.apihost}productlist`)
				.then(function(res){
					window.console.log(res.data);
					that.tableData.thead = ['名称','价格','状态'];
					res.data.map((item)=>{
						let tmp = [item._id,item.product_name,item.product_price,item.product_status===1?'在售':'已下架'];
						that.tableData.tbody.push(tmp);
					})
				}).catch(function(err){
					if(err) throw err;
				});
		},
		components:{
			PageTitle,Toolbar,ListTable,Loading,Toast//,Dialog
		}
	}
</script>

<style>
</style>