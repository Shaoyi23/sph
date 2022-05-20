//利用axios对axios进行二次封装
//故先引入axios
import axios from "axios";
const requests = axios.create({
  //配置对象
  //baseURL基础路径，发请求时，路径当中会出现api
  baseURL: "/api",
  //timeout代表请求超时的时间
  timeout: 5000,
});
//请求拦截器：可以在发请求之前，可处理一些业务。
requests.interceptors.request.use((config) => {
  //config:配置对象，对象中有一个属性很重要(即：headers请求头)
  return config;
})
//响应拦截器
requests.interceptors.request.use(
  //响应成功的回调函数：服务器响应数据回来之后，响应拦截器可检测到，可做一些事情
  (res) => {
    return res.data;
  },
  //响应失败的回调函数
  (error) => {
    return Promise.reject(new Error("fail!!"));
  }
);
//对外暴露
export default requests;
