import { reqGetSearchinfo } from "@/api";
//search模块仓库
const state = {
  //仓库初始化
  searchList: [],
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    //获取search模块数据
    let result = await reqGetSearchinfo(params);
    //params形参,至少是一个空对象
    if ((result.code = 200)) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {
  //当前的state是小仓库search里的state，并非大仓库中的那个state。
  goodsList(state) {
    //这样书写是会有问题的。
    //若网络不给力或没有网络，则state.searchList.goodsList应返回的是undefined；所以此时计算新的属性的属性值至少给一个数组。
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    //这样书写是会有问题的
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    //这样书写是会有问题的
    return state.searchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
