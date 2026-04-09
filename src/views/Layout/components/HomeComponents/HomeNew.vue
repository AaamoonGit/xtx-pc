<script setup>
import HomePanel from '@/components/HomePanel.vue'

import { findNewRequest } from '@/apis/layout'

import { onMounted, ref } from 'vue'
import GoodsItem from '@/components/goodsItem.vue'

const NewList = ref([])
const findNew = async () => {
  const res = await findNewRequest()
  // console.log(res)
  NewList.value = res.result
  NewList.value.forEach((item) => (item.desc = ''))
  // console.log(NewList.value);
}
onMounted(() => {
  findNew()
})
</script>

<template>
  <HomePanel>
    <template #title>新鲜好物</template>
    <template #subTitle>新鲜出炉 品质靠谱</template>
    <template #content>
      <ul class="goods-list">
        <li v-for="item in NewList" :key="item.id">
          <GoodsItem :goods="item" :size="2"></GoodsItem>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
