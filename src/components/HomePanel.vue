<script setup>
// import goodsItem from './goodsItem.vue';
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          <slot name="title">新鲜好物</slot>
          <small>
            <slot name="subTitle">新鲜出炉 品质靠谱</slot>
          </small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot name="content">
        <!-- <div class="container">
          <div class="item">
            <div class="img">
              <img src="https://picsum.photos/200/300" alt="">
            </div>
            <div class="info">
              <div class="title">title</div>
              <div class="price">price</div>
            </div>
          </div>
        </div> -->
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
