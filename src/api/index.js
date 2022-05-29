//当前这个模块,api统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";
//三级联动接口
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests.get("/product/getBaseCategoryList");
//获取banner数据
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
//获取search数据
export const reqGetSearchinfo = (params) => requests({url:"/list",method:"post",data:params});
