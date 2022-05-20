<template>
  <div>
    <TypeNav />
    <!-- 三级联动组件已经全局注册,不需要再引入 -->
    <ListContainer />
    <Recommend/>
  </div>
  
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
  },
};
</script>

<style scoped>
</style>