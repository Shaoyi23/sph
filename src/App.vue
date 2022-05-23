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
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //挂载完成以后获取数据,存储到本地store,search直接从本地拿,节省资源,提高效率
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>