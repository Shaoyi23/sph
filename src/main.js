import Vue from "vue";
import App from "./App.vue";
//引入路由
import router from "@/router";
//三级联动组件--全局组件
import TypeNav from "@/components/TypeNav";
//引入仓库
import store from "@/store";
//引入mock模拟数据
import "@/mock/mockServe";
//引入swiper
import "swiper/css/swiper.css";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination"

//注册组件==========
//第一个参数:全局组件的名字
//第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name,Pagination)
new Vue({
  render: (h) => h(App),
  //注册路由 底下的写法kv一致,则省略v
  //注册路由信息,当这里书写router的时候,组件身上拥有$route $router属性
  router,
  //注册仓库,组件实例的身上会多一个$store的属性
  store,
}).$mount("#app");
