<template>
	<transition name="slide">
	<PageTitle pagetitle='订单列表'></PageTitle>
	</transition>
</template>

<script>
	import PageTitle from './common/pagetitle.vue';
	
	export default{
		name: 'OrderList',
		
		components:{
			PageTitle
		}
	}
</script>

<style>
</style>
