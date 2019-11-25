<template>
	<form :action="getReqUrl" method="post">
		<ul>
			<li>
				<label for="">产品名称：</label>
				<input type="text" name="pname" id="" required="required">
			</li>
			<li>
				<label for="">价格：</label>
				<input type="text" name="pprice" id="" required="required">
			</li>
			<li>
				<label for="">状态：</label>
				<input type="radio" name='status' value="1"> 上架
				<input type="radio" name='status' value="0"> 下架
			</li>
			<li>
				<label for="">产品描述：</label>
				<input type="text" name="pdes" >
			</li>
			<li>
				<input type="submit">
			</li>
		</ul>
	</form>
</template>

<script>
	import basicConfig from '../basicconfig.js';
	
	export default {
		name: 'Eproduct',
		computed: {	// 计算属性
			getReqUrl:function(){
				return basicConfig.apihost+'addproduct';
			}
		}
	}
</script>

<style>
</style>
