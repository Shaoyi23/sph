import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'

new Vue({
  render: h => h(App),
  //注册路由 底下的写法kv一致,则省略v
  //注册路由信息,当这里书写router的时候,组件身上拥有$route $router属性
  router
}).$mount('#app')
