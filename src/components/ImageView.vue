<script setup>
const props = defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})
// 图片列表
const imageList = props.imageList
import { ref, useTemplateRef } from 'vue'
const activeIndex = ref(0)
const changeLarge = (i) => {
  // console.log(i);
  activeIndex.value = i
}

const isLargeVisible = ref(false)

import { useMouseInElement } from '@vueuse/core'
const target = useTemplateRef('target')
const { elementX, elementY, elementHeight, elementWidth } =
  useMouseInElement(target)
const layer = useTemplateRef('layerRef')
const layerleft = ref(0)
const layerTop = ref(0)
const bcpX = ref(0)
const bcpY = ref(0)
const isFirstMove = ref(true)
let timer = null
const middleChange = () => {
  if (isFirstMove.value) {
    timer = setTimeout(() => {
      isFirstMove.value = false
    }, 100)
  }

  // 放大元素显示
  isLargeVisible.value = true
  // console.log(isOutside.value)

  // console.log(elementX.value, elementY.value, isOutside.value)

  if (!layer.value) return
  // 滑块移动
  layerleft.value = elementX.value - layer.value.offsetWidth / 2
  layerTop.value = elementY.value - layer.value.offsetHeight / 2

  // 边界控制
  if (elementX.value + layer.value.offsetWidth / 2 >= elementHeight.value) {
    layerleft.value = elementHeight.value - layer.value.offsetWidth
  }
  if (elementY.value + layer.value.offsetHeight / 2 >= elementWidth.value) {
    layerTop.value = elementWidth.value - layer.value.offsetHeight
  }
  if (elementX.value <= layer.value.offsetWidth / 2) {
    layerleft.value = 0
  }
  if (elementY.value <= layer.value.offsetHeight / 2) {
    layerTop.value = 0
  }

  // 放大图移动
  bcpX.value = -layerleft.value * 2
  bcpY.value = -layerTop.value * 2
}
const middleLeave = () => {
  isLargeVisible.value = false
  isFirstMove.value = true
  clearTimeout(timer)
}
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div
      class="middle"
      ref="target"
      @mousemove="middleChange"
      @mouseleave="middleLeave"
    >
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div
        ref="layerRef"
        class="layer"
        :class="{ firstMove: isFirstMove }"
        :style="{ left: `${layerleft}px`, top: `${layerTop}px` }"
      ></div>
    </div>
    <!-- 小图列表 -->
    <ul ref="smallImgRef" class="small">
      <li
        @mouseenter="changeLarge(i)"
        v-for="(img, i) in imageList"
        :key="i"
        :class="{ active: i === activeIndex }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[activeIndex]})`,
          backgroundPositionX: `${bcpX}px`,
          backgroundPositionY: `${bcpY}px`
        }
      ]"
      v-show="isLargeVisible"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
    &.firstMove {
      transition: all 0.5s ease;
    }
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
