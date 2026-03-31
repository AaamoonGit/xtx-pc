<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFooterFixed from './components/LayoutFooterFixed.vue'
defineOptions({
  name: 'LayoutPage'
})
</script>
<template>
  <LayoutFooterFixed></LayoutFooterFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view v-slot="{ Component, route }">
    <transition name="slide-up" appear>
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
  <LayoutFooter></LayoutFooter>
</template>
<style scoped lang="scss"></style>
