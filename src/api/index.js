//当前这个模块,api统一管理
import requests from "./request";
//三级联动接口
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
