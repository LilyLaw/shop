import Router from 'vue-router';
import Vue from 'vue';
import IndexV from './components/index.vue'
import ProductList from './components/productlist.vue'
import OrderList from './components/orderlist.vue'
import Eproduct from './components/eproduct.vue'

Vue.use(Router);

const routes = [
	{
		path:'/', component: IndexV
	},{
		path:'/productlist',component:ProductList
	},{
		path:'/orderlist',component:OrderList
	},{
		path:'/addproduct',component:Eproduct
	}
];

const router1 = new Router({routes});
export default router1;