<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => {}
  },
  size: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item" :class="{ 'goods-item2': size === 2 }">
    <img v-lazy-img="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}{{ goods.title }}</p>
    <p class="desc ellipsis">{{ goods.desc }}{{ goods.alt }}</p>
    <p v-if="goods.price" class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
.goods-item {
  display: block;
  width: 220px;
  // padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

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
.goods-item2 {
  width: 306px;
  height: 406px;

  img {
    width: 306px;
    height: 306px;
  }

  p {
    font-size: 22px;
    padding-top: 0px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .name {
    padding-top: 12px;
    font-size: 22px;
  }
  .desc {
    font-size: 18px;
    padding-top: 12px;
    height: 45px;
  }
}
</style>
