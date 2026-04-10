import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartInfo = ref([])

    /**
     * 添加购物车
     * action
     * @param {*} data
     */
    const addCart = (data) => {
      // cartInfo.value.push(data)
      console.log(data)

      const item = cartInfo.value.find((item) => item.skuId === data.skuId)
      if (item) {
        item.count += data.count
      } else {
        cartInfo.value.push(data)
      }
    }

    /**
     * 删除购物车商品
     * @param {*} skuId
     */
    const delCart = (skuId) => {
      cartInfo.value = cartInfo.value.filter((item) => item.skuId !== skuId)
    }

    /**
     * 获取购物车商品总数(不包括每个商品具体的数量)
     */
    const getTotalCart = computed(() => {
      return cartInfo.value.length
    })

    /**
     * 获取购物车商品总价(包括每个商品具体的数量)
     */
    const getTotalPrice = computed(() => {
      return cartInfo.value.reduce((pre, cur) => {
        return pre + cur.price * cur.count
      }, 0)
    })

    return { cartInfo, addCart, delCart, getTotalCart, getTotalPrice }
  },
  { persist: true }
)
