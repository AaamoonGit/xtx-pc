<script setup>
import HomeBanner from './components/HomeComponents/HomeBanner.vue'
import HomeCategory from './components/HomeComponents/HomeCategory.vue'
import HomeHot from './components/HomeComponents/HomeHot.vue'
import HomeNew from './components/HomeComponents/HomeNew.vue'
import HomeProduct from './components/HomeComponents/HomeProduct.vue'

defineOptions({
  name: 'HomePage'
})
</script>
<template>
  <div class="home-page">
    <div class="container">
      <HomeCategory></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>
  </div>
</template>
<style scoped lang="scss"></style>
