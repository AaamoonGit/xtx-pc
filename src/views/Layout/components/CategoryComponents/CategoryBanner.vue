<script setup>
// 部分代码省略
import { getBannerRequest } from '@/apis/layout'
import { ref, onMounted } from 'vue'
// 获取banner
const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerRequest('2')
  // console.log(res)
  bannerList.value = res.result
}

onMounted(() => getBanner())
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 部分代码省略
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
