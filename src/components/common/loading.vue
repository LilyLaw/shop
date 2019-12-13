<template>
	<ul class="lll-loadingAnimation-changeWidth">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</template>

<script>
	
</script>

<style scoped lang="less">
	ul.lll-loadingAnimation-changeWidth,ul.lll-loadingAnimation-changeWidth li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	ul.lll-loadingAnimation-changeWidth{
		display: flex;
		justify-content: center;
		li{
			width: 40px;
			height: 10px;
			border-radius: 6px;
			margin: 5px;
			flex-shrink: none;
			flex: 0 0 auto;
			background: #1E88E5;
		}
		li:nth-child(1){
			animation: lll_loadingAnimation_changeWidth 1s ease 0s infinite alternate;
			-moz-animation: lll_loadingAnimation_changeWidth 1s ease 0s infinite alternate;
			-webkit-align-content: lll_loadingAnimation_changeWidth 1s ease 0s infinite alternate;
		}
		li:nth-child(2){
			animation: lll_loadingAnimation_changeWidth 1s ease 0.25s infinite alternate;
			-moz-animation: lll_loadingAnimation_changeWidth 1s ease 0.25s infinite alternate;
			-webkit-align-content: lll_loadingAnimation_changeWidth 1s ease 0.25s infinite alternate;
		}
		li:nth-child(3){
			animation: lll_loadingAnimation_changeWidth 1s ease 0.5s infinite alternate;
			-moz-animation: lll_loadingAnimation_changeWidth 1s ease 0.25s infinite alternate;
			-webkit-align-content: lll_loadingAnimation_changeWidth 1s ease 0.25s infinite alternate;
		}
		li:nth-child(4){
			animation: lll_loadingAnimation_changeWidth 1s ease 0.75s infinite alternate;
			-moz-animation: lll_loadingAnimation_changeWidth 1s ease 0.75s infinite alternate;
			-webkit-align-content: lll_loadingAnimation_changeWidth 1s ease 0.75s infinite alternate;
		}
		li:nth-child(5){
			animation: lll_loadingAnimation_changeWidth 1s ease 1s infinite alternate;
			-moz-animation: lll_loadingAnimation_changeWidth 1s ease 1s infinite alternate;
			-webkit-align-content: lll_loadingAnimation_changeWidth 1s ease 1s infinite alternate;
		}
	}
	@keyframes lll_loadingAnimation_changeWidth{
		from{
			width: 2.5rem;
		}
		to{
			width: 0.625rem;
		}
	}
</style>
