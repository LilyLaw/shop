<template>
	<table class="lll-listtable">
		<thead>
			<tr>
				<th><Checkicon /></th>
				<th v-for="(item,i) of tabledata.thead" :key='i'>{{item}}</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,i) of tabledata.tbody" :key='i'>
				<td><Checkicon/></td>
				<td v-for="(v,index) of item" :key='index' v-show="index!==0">{{v}}</td>
				<td>
					<Btn incon="编辑" :toUrl='"/addproduct/"+item[0]' type="basic" />
					<Btn incon="删除" toope='/delete' type="danger" @deleteme='deletemeproduct(item[0])'/>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import Btn from './btn.vue';
	import Checkicon from './checkicon.vue';
	import axios from 'axios';
	import basicConfig from '../../basicconfig.js';

	export default{
		name: 'ListTable',
		props: ['tabledata'],
		methods:{
			deletemeproduct(id){
				window.console.log(id);
				axios.get(`${basicConfig.apihost}product/delete/${id}`)
					.then(function(res){
						window.console.log(res);
					})
					.catch(function(err){
						throw err;
					})
			}
		},
		components:{
			Btn,
			Checkicon
		}
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
