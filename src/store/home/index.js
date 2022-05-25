//home的小模块仓库
import { reqCategoryList, reqGetBannerList } from "@/api";
//vuex三件套
const state = {
  //起始值为空数组
  //home仓库存储三级菜单的数据
  categoryList: [],
  //获取轮播图的数据
  bannerList: [],
};
//mutations是唯一修改state的地方
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  }
};
//用户处理派发action的地方
const actions = {
  //通过API里面的接口函数调用,向服务器发送请求,获取服务器的数据
  //解构commit
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
};
const getters = {};
//对外暴露
export default {
  state,
  mutations,
  actions,
  getters,
};
