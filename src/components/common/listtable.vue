<template>
	<table class="lll-listtable">
		<thead>
			<tr>
				<th><i class="icon iconfont iconcheckbox-non"></i></th>
				<th v-for="(item,i) in tabledata.thead" :key='i'>{{item}}</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,i) in renderTbody" :key='i'>
				<td v-for="(value,index) in item"  :key='(index)' v-html="value"></td>
				<td>
					<Btnbasic incon="编辑" toUrl='/addproduct'></Btnbasic>
					<Btndanger incon="删除" toUrl='/baidu'></Btndanger>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import Btnbasic from './btn-basic.vue';
	import Btndanger from './btn-danger.vue';

	export default{
		name: 'ListTable',
		props: ['tabledata'],
		computed:{
			renderTbody: function(){
				let tpm =[];
				this.tabledata.tbody.map((item)=>{
					let tpm_c = item;
					tpm_c[0] = `<i class="icon iconfont iconcheckbox-non" itemid=${item[0]}></i>`;
					tpm.push(tpm_c);
				});
				return tpm;
			}
		},
		components:{
			Btnbasic,Btndanger
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
