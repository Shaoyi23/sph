//Home的模块仓库
import { reqCategoryList } from "@/api";
const state = {
    //起始值为空数组
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
const actions = {
    //通过API里面的接口函数调用,向服务器发送请求,获取服务器的数据
    //解构commit
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    }
};
const getters = {};
//对外暴露
export default{
    state,
    mutations,
    actions,
    getters
}
