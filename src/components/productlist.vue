<template>
	<div>
		<PageTitle pagetitle='产品列表'></PageTitle>
		<Toolbar @searchproduct = 'searchproduct' status='loadedTableData'/>
		<ListTable v-if="loadedTableData" :tabledata='tableData' ></ListTable>
		<Loading v-else>加载中</Loading>
		<Pagination :currentpage='currentpage' :allpage='allpage' :pagesize='pagesize' 
							@toPrvePage="toPrvePage" @toNextPage="toNextPage" @toOnePage="toOnePage"
							@changepage="changepage" @changepagesize="changepagesize"/>
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
	import qs from 'querystring';
	import Pagination from './common/pagination.vue';
	
	export default {
		name: 'ProductList',
		data: function(){
			return {
				tableData:{
					thead:[],
					tbody:[]
				},
				currentpage:1,
				allpage: 8,
				pagesize: 5
			}
		},
		computed:{
			loadedTableData: function(){ return this.tableData.tbody.length>=1; }
		},
		methods:{
			searchproduct:function(searchKeywords){
				let that = this;
				axios({
					method:'post',
					url: `${basicConfig.apihost}product/search`,
					data: qs.stringify({searchkeywords:searchKeywords})
				}).then(function(res){
					that.tableData.tbody = [];
					res.data.map((item)=>{
						let tmp = [item._id,item.product_name,item.product_price,item.product_status===1?'在售':'已下架'];
						that.tableData.tbody.push(tmp);
					});
				}).catch(function(err){ throw err; });
			},
			toPrvePage(){
				if(parseInt(this.currentpage)>1){
					this.currentpage--;
					this.renderProducts();
				}
			},
			toNextPage(){
				if(parseInt(this.currentpage)<this.allpage){
					this.currentpage++;
					this.renderProducts();
				}
			},
			toOnePage(despage){
				let intdp = parseInt(despage)
				if(intdp&&intdp!==parseInt(this.currentpage)){
					this.currentpage = intdp;
					this.renderProducts();
				}
			},
			changepage(newpage){
				this.currentpage = newpage;
				this.renderProducts();
			},
			changepagesize(newpagesize){
				this.pagesize = newpagesize;
				this.currentpage = 1;
				this.renderProducts();
			},
			renderProducts(){
				let that = this;
				axios({
					method:'post',
					url: `${basicConfig.apihost}productlist`,
					data: qs.stringify({currentpage: this.currentpage,pagesize: this.pagesize})
				}).then(function(res){
					that.tableData.thead = ['名称','价格','状态'];
					that.tableData.tbody = [];	// 先清空原来渲染的产品
					res.data.products.map((item)=>{
						let tmp = [item._id,item.product_name,item.product_price,item.product_status===1?'在售':'已下架'];
						that.tableData.tbody.push(tmp);
					});
					let pages = parseInt(parseInt(res.data.allcount)/parseInt(that.pagesize)), leftnum = parseInt(res.data.allcount)%5;
					if(leftnum > 0){ pages++; }
					that.allpage = pages;
				}).catch(function(err){ if(err) throw err; });
			}
		},
		created: function(){
			this.renderProducts();
		},
		components:{
			PageTitle,Toolbar,ListTable,Pagination,Loading,Toast//,Dialog
		}
	}
</script>

<style>
</style>