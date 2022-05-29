<!-- 注册轮播图全局组件-->
<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <!-- 遍历图片========== -->
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  //监听数据变化
  watch: {
    list: {
      //是否立即监听
      immediate: true,
      handler() {
        //只能监听数据已经有的,
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              //分页器是否可点击
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>