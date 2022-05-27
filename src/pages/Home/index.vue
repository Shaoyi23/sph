<template>
  <div>
    <TypeNav />
    <!-- 三级联动组件已经全局注册,不需要再引入 -->
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
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
import { mapState } from 'vuex'
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
  //派发action请求,不能在floor内部派发,区别于bannerList的内部请求!!!!!!!!!!!!!
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList,
    }),
  },
}; 
</script>

<style scoped>
</style>