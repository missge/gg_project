import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Login from '@/components/Login'
// 公共组件
// import bigImg from '@/components/publicCom/bigImg'

//对账结算
// import SettleRecord from '@/components/checkAccount/SettleRecord'
// import PlatformBill from '@/components/checkAccount/PlatformBill'
// import SettleRecordDetail from '@/components/checkAccount/SettleRecordDetail'
// import SettleManage from '@/components/checkAccount/SettleManage'

//选品列表
// import ProductSelectList from '@/components/goods/ProductSelectList'
// import test from '@/components/test'
// export default new Router({
//   routes: [
//     {
// 		path: '/Home',
// 		name: '主页',
// 		component: Home,
// 		children:[
// 			 {
// 		    	path: '/SettleRecord',
// 				name: '结算记录',
// 				component: SettleRecord,
// 		    },
// 		    {
// 		    	path: '/PlatformBill',
// 				name: '平台账单',
// 				component: PlatformBill,
// 		    },{
// 		    	path: '/SettleRecordDetail',
// 		    	name: '结算详情',
// 				component: SettleRecordDetail,
// 		    },
// 		    {
// 		    	path:'/SettleManage',
// 		    	name:'结算管理',
// 		    	component:SettleManage,
// 		    },
// 		    {
// 		    	path: '/ProductSelectList',
// 				name: '选品列表',
// 				component: ProductSelectList,
// 		    },

		   
// 		]
//     },
// 	{
//     	path: '/',
// 		name: '登录',
// 		component: Login,
//     },
//      {
//     	path:'/bigImg',
//     	name: '结算记录',
// 		component: bigImg
//     },{
//     	path:'/test',
//     	name: '测试',
// 		component: test
//     }
//   ]
// })
Vue.use(Router)

const routes = [
	{
		path:'/home',
		name:'首页',
		// meta:{
			// requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
		// },
		component: resolve => require(["@/components/Home"], resolve),
		children:[
			// {
			// 	path:'/SettleRecord',
			// 	name:'结算记录',
			// 	component: resolve => require(["@/components/checkAccount/SettleRecord"], resolve)
			// },
			// {
			// 	path:'/PlatformBill',
			// 	name:'平台账单',
			// 	component: resolve => require(["@/components/checkAccount/PlatformBill"], resolve)
			// },
			// {
			// 	path:'/SettleRecordDetail',
			// 	name:'结算详情',
			// 	component: resolve => require(["@/components/checkAccount/SettleRecordDetail"], resolve)
			// },
			// {
			// 	path:'/SettleManage',
			// 	name:'结算管理',
			// 	component: resolve => require(["@/components/checkAccount/SettleManage"], resolve)
			// },
			// {
			// 	path:'/ProductSelectList',
			// 	name:'选品列表',
			// 	component: resolve => require(["@/components/goods/ProductSelectList"], resolve)
			// },
			{
				path:'/RoleManagement',
				name:'角色管理',
				component: resolve => require(["@/components/system/RoleManagement"], resolve)
			},{
				path:'/RoleManaChange',
				name:'角色级别',
				component: resolve => require(["@/components/system/RoleManaChange"], resolve)
			},
			{
				path:'/UserManagement',
				name:'用户管理',
				component: resolve => require(["@/components/system/UserManagement"], resolve)
			},
			{
				path:'/UserManaChange',
				name:'用户管理修改',
				component: resolve => require(["@/components/system/UserManaChange"], resolve)
			},
			{
				path:'/OperationLog',
				name:'操作日志',
				component: resolve => require(["@/components/system/OperationLog"], resolve)
			},
			{
				path:'/FunctionLog',
				name:'功能日志',
				component: resolve => require(["@/components/system/FunctionLog"], resolve)
			},
			{
				path:'/LiShiInfoLog',
				name:'部门人员变更历史记录',
				component: resolve => require(["@/components/system/LiShiInfoLog"], resolve)
			},
			{
				path:'/userList',
				name:'用户列表',
				component:resolve => require(["@/components/userList/userList"],resolve)
			},
			{
				path:'/userListChange',
				name:'用户列表',
				component:resolve => require(["@/components/userList/userListChange"],resolve)
			},
			{
				path:'/dept',
				name:'部门',
				component:resolve => require(["@/components/checkAccount/dept"],resolve)
			}
		]
	},
	{
		path:'/',
		name:'登录',
		component: resolve => require(["@/components/Login"], resolve)
	},
]
export default new Router({
	base:"/",
	routes
})


