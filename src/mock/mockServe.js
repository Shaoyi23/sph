import Mock from "mockjs";
import banner from "./banner.json";
import floor from "./floor.json";

//webpack中,图片和json文件默认暴露,不需写export
//两个参数---第一个是请求地址 第二个是请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });

//需要在入口文件mian.js引入一下使用
