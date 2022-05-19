<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- footer在Home、Search中显示,在Login、Register中隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
 </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'',
  components:{
    Header,
    Footer
    }
 }
</script>

<style>
</style>