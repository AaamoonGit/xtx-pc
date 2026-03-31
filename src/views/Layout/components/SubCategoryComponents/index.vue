<script setup>
import {
  getCategoryFilterRequest,
  getSubCategoryRequest
} from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import goodsItem from '@/components/goodsItem.vue'
const route = useRoute()
const CategoryDate = ref([])
const getCategoryDate = async () => {
  const res = await getCategoryFilterRequest(route.params.id)
  console.log(res)

  CategoryDate.value = res.result
}

onMounted(() => {
  getCategoryDate()
})

const goodsList = ref([])
const reqDate = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodsList = async () => {
  const res = await getSubCategoryRequest(reqDate.value)
  console.log(res)
  goodsList.value = res.result.items
}

onMounted(() => {
  getGoodsList()
})

const activeName = ref('first')

const handleTabChange = () => {
  console.log(activeName.value)
  reqDate.value.page = 1
  reqDate.value.sortField = activeName.value
  getGoodsList()
}
const isDisabled = ref(false)

const load = async () => {
  console.log('+')

  reqDate.value.page++

  const res = await getSubCategoryRequest(reqDate.value)
  console.log(res)
  goodsList.value = [...goodsList.value, ...res.result.items]
  const totalPages = res.result.pages
  if (reqDate.value.page === totalPages) {
    isDisabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryDate.parentId}` }"
          >{{ CategoryDate.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ CategoryDate.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="activeName" @click="handleTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        infinite-scroll-delay="1000"
        infinite-scroll-distance="0"
        :infinite-scroll-disabled="isDisabled"
      >
        <!-- 商品列表-->
        <goodsItem
          v-for="item in goodsList"
          :key="item.id"
          :goods="item"
        ></goodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
