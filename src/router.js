import Router from 'vue-router';
import Vue from 'vue';
import IndexV from './components/index.vue'
import ProductList from './components/productlist.vue'
import OrderList from './components/orderlist.vue'
import Eproduct from './components/eproduct.vue'
import Loginpage from './components/loginpage.vue'

Vue.use(Router);

const routes = [
	{
		path:'/', component: IndexV
	},{
		path:'/productlist',component:ProductList
	},{
		path:'/orderlist',component:OrderList
	},{
		path:'/addproduct/:id?',component:Eproduct
	},{
		path:'/login',component:Loginpage
	}
];

const router1 = new Router({routes});
export default router1;