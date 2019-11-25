<template>
	<div>产品列表</div>
</template>

<script>
	import axios from 'axios';
	import basicConfig from '../basicconfig.js';
	
	export default {
		name: 'ProductList',
		data: function(){
			return {}
		},
		created: function(){
			axios.get(`${basicConfig.apihost}productlist`)
				.then(function(res){
					window.console.log(res);
				}).catch(function(err){
					if(err) throw err;
				})
		}
	}
</script>

<style>
</style>