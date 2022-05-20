<template>
  <div>
    <TypeNav />
    <!-- 三级联动组件已经全局注册,不需要再引入 -->
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <!-- 组件复用一次 -->
    <Floor />
    <Brand />
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style scoped>
</style>