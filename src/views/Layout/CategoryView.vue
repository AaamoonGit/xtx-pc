<script setup>
import breadCrumb from './components/CategoryComponents/breadCrumb.vue'
import CategoryBanner from './components/CategoryComponents/CategoryBanner.vue'
import CategoryList from './components/CategoryComponents/CategoryList.vue'
defineOptions({
  name: 'CategoryPage'
})
</script>
<template>
  <breadCrumb></breadCrumb>
  <CategoryBanner></CategoryBanner>
  <CategoryList></CategoryList>
</template>
