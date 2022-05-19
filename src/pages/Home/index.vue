<template>
  <div>
    <TypeNav />
    <!-- 三级联动组件已经全局注册,不需要再引入 -->
    <ListContainer />
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
export default {
  name: "",
  components: {
    ListContainer,
  },
};
</script>

<style scoped>
</style>