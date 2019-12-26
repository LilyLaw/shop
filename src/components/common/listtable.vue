<template>
	<table class="lll-listtable">
		<thead>
			<tr>
				<th><i class="icon iconfont" :class="isAllcheck" @click='checkall'></i></th>
				<th v-for="(item,i) of tabledata.thead" :key='i'>{{item}}</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,i) of tabledata.tbody" :key='i'>
				<td><i class="icon iconfont" :class="meCheck(item[0])" @click='checkone(item[0])'></i></td>
				<td v-for="(v,index) of item" :key='index' v-show="index!==0">{{v}}</td>
				<td>
					<Btn incon="编辑" :toUrl='"/addproduct/"+item[0]' type="basic"/>
					<Btn incon="删除" toope='/delete' type="danger" @deleteme='deleteme(item[0])'/>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import Btn from './btn.vue';
	// import axios from 'axios';
	// import basicConfig from '../../basicconfig.js';
	// import qs from 'querystring';

	export default{
		name: 'ListTable',
		props: ['tabledata'],
		data: function(){
			return {
				allcheck: []
			}
		},
		methods:{
			deleteme(id){ this.deleteProduct([ id ]);	},
			deleteAllcheck(){ 
				// this.deleteProduct(this.allcheck); 
			},
			deleteProduct(arr){
				window.console.log(arr);
				// axios({
				// 	method: 'post',
				// 	url: `${basicConfig.apihost}product/delete/`,
				// 	data: qs.stringify(arr)
				// }).then(()=>{}).catch(err=>{ throw err; });
			},
			checkall(){
				if(this.allcheck.length === this.tabledata.tbody.length){
					this.allcheck = [];
				}else{
					this.allcheck = [];
					this.tabledata.tbody.map(item =>{ this.allcheck.push(item[0]); });
				}
			},
			checkone(id){
				let pos = this.allcheck.indexOf(id)
				if(pos === -1){	// 原先没有，所以加上
					this.allcheck.push(id);
				}else{	// 原先有，所以删掉
					this.allcheck.splice(pos,1);
				}
			}
		},
		computed: {
			meCheck(){
				return function(id){ return this.allcheck.indexOf(id) !== -1?'iconcheckbox_on':'iconcheckbox-non'; }
			},
			isAllcheck(){ return this.allcheck.length === this.tabledata.tbody.length?'iconcheckbox_on':'iconcheckbox-non'; }
		},
		components:{ Btn }
	}
</script>

<style scoped lang="less">
	table.lll-listtable{
		width: 100%;
		overflow: scroll;
		text-align: left;
		margin-top: 1rem;
		border-collapse: collapse; /* 合并边框，公用边框 */
		thead{
			tr{
				background: #fafafa;
				th{
					border: none;
					padding: 1rem;
					font-weight: 600;
					&:nth-child(1){
						box-sizing: border-box;
						width: 50px;
					}
				}
			}
		}
		tbody{
			tr{
				height: 40px;
				background: #fff;
				transition: background .3s ease;
				td{
					padding: 1rem;
					border: none;
					border-bottom: 1px solid #efefef;
					&:nth-child(1){
						box-sizing: border-box;
						width: 50px;
					}
				}
				&:hover{
					background: #e6f7ff;
				}
			}
			tr:nth-child(2n){
			}
		}
	}
</style>
