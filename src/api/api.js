import axios from 'axios';
import qs from 'qs';
import URLSearchParams from 'url-search-params';//接口定义了一些实用的方法来处理 URL 的查询字符串。
export const setToken = 'setToken'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//使用base64和md5
let Base64 = require('js-base64').Base64
function getParamValue(key,params){
	let value='';
	if (params[key]){
		value = params[key];
		delete params[key]
	}
	return value;
}
function pageJump(url) {
    router.push({path: url});
}
//webpack.dev.conf.js修改url路径
// let base = SERVER_BASE_URL;
// let base = 'http://wxmall.dealreal.com.cn/wxmallPort/'
let base = 'http://h20z908444.imwork.net:17523/ggstSys/'
// let base = 'http://10.0.0.15:8081/wxmallPort/'
// export const localHostUrl='http://wxmall.dealreal.com.cn/wxmallPort/'
export const localHostUrl='http://h20z908444.imwork.net:17523/ggstSys/'

let loginInstance = axios.create({
    baseURL: base
});
//请求axios response返回来的数据
function responseFilter(response) {
    let {status, data} = response;
    if (status >= 200 && status < 300) {
        return data;
    }
    switch (status) {
        case 401: {
            // localStorage.removeItem("token");
            pageJump("/login");
            return ;
        }
        default: {
            //es6 promise---reject失败
            return Promise.reject(data.message);
        }
    }
}
//formData 拼接请求字符串类似于qs.stringify()
function formData(param) {
    const data = new URLSearchParams();
    for (let key in param) {
        data.append(key, param[key]);
        // console.log(param)
    }
    return data;
}


export const mallId ='123307710000000'
// 同下面
// axios.post(url,data,Json).then(
//     function (response) {
//         console.log(response)
//     }
// ).catch(function(error){
//     console.log(error)
// })
//退出清除token
 export const logon = params => {
    return axios.post(`${base}logon.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//是否存在token
 export const loginIntercept = params => {
    return axios.post(`${base}loginIntercept.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
/***************************登录*********************************/
export const requestLogin = params => {
    return axios.post(`${base}loginInfo.json`, qs.stringify(params),{emulateJSON:true}).then(responseFilter);

}
/***************************平台账单*****************************/
//查询数据
// export const getOrderBillInfo = params => {
//     // return axios.post(`${localHostUrl}orderBillInfo.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
//     return loginInstance.post(`${base}orderBillInfo.json`, formData(params)).then(responseFilter);
// };
// //点击查看
// export const ClickSee = params => {
//     return loginInstance.post(`${base}getPactPic.json`,formData(params)).then(responseFilter);
// };
//导出
// export const OrderBillInfoImport = params => {
//     return loginInstance.post(`${base}exportBill.json`,formData(params)).then(responseFilter);
// }
/***************************结算记录*****************************/
// //结算记录列表
// export const getMallSettInfo = params =>{
//      return axios.post(`${base}mallSettInfo.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
// }
// // 获取下拉列表
// export const getSelectList = params => {
//     return loginInstance.post(`${base}getSelectList.json`,formData(params)).then(responseFilter);
// }
// //查看
// export const getSettDetaills = params => {
//     return loginInstance.post(`${base}mallSettDetails.json`,formData(params)).then(responseFilter);
// }
// //结算管理
// export const getSettleManage = params => {
//     return loginInstance.post(`${base}getBillBySettId.json`,formData(params)).then(responseFilter);
// }
// //撤销结算单
// export const setCencelSett = params => {
//     return loginInstance.post(`${base}cancelSett.json`,formData(params)).then(responseFilter);
// }
/*************************系统维护***************************/
// 用户管理列表
export const getFindUserPost = params =>{
     return axios.post(`${base}findUserPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//用户管理状态
export const UserSelectStatus = params => {
    return axios.post(`{base}`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//用户管理添加
export const addUserList = params => {
    return axios.post(`${base}createUserPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//用户修改列表获取数据
export const getChangeList = params => {
    return axios.post(`${base}editUser.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
} 
//用户修改保存
export const UserPostChange = params => {
    return axios.post(`${base}editUserPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//用户删除
export const UserPostDelete = params =>{
    return axios.post(`${base}DeletUserPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//用户初始化
export const UserPostInit = params =>{
    return axios.post(`${base}UserupPassPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}

//角色修改获取数据
export const getRolePostChange = params => {
    return axios.post(`${base}editRoles.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//角色管理修改
export const RolePostchange = params =>{
    return axios.post(`${base}editRolesPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//角色列表
export const getRoleUserPost = params =>{
     return axios.post(`${base}findRolePost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter);
}
//操作日志
export const OperationLog = params => {
    return axios.post(`${base}findOperatorsPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//操作日志删除
export const OperationLogDelete = params => {
    return axios.post(`${base}deletOperatorsPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}

//功能日志
export const FunctionLog = params => {
    return axios.post(`${base}findFunctionsPost.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}

//部门人员变更历史记录
export const LiShiInfoLog = params => {
    return axios.post(`${base}liShiInfoList.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//部门列表
export const deptList = params =>{
    return axios.post(`${base}searchBuMenList.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}

//部门列表
export const deptEditSave = params =>{
    return axios.post(`${base}buMenUpdate.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}


export const searchBuMenInfo = params =>{
    return axios.post(`${base}searchBuMenInfo.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//用户列表
export const getUserList = params => {
    return axios.post(`${base}cardMembersList.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//用户列表修改
export const userListChange = params => {
    return axios.post(`${base}cardMembersDetail.json`,qs.stringify(params),{emulateJSOn:true}).then(responseFilter)
}
//保存
export const saveUserList = params => {
    return axios.post(`${base}cardMembersUpdate.json`,qs.stringify(params),{emulateJSOn:true}).then(responseFilter)
}
//获取下拉框部门和状态的值
export const BumenZhuangtaiSelect = params => {
    return axios.post(`${base}getInfo.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
export const cardMembersOperate = params => {
    return axios.post(`${base}cardMembersOperate.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}
//返回上一步
export const goHistory = params => {
    return axios.post(`${base}goHistory.json`,qs.stringify(params),{emulateJSON:true}).then(responseFilter)
}